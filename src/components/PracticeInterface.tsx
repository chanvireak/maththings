import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import PracticeQuestion from './PracticeQuestion.tsx';
import PracticeAnswer from './PracticeAnswer.tsx';
import PracticeStats from './PracticeStats.tsx';
import PracticeDialog from './PracticeDialog.tsx';

// Dynamically load hint markdown files
const hintModules = import.meta.glob("../trick-doc/*.md", { query: "?raw", import: "default" });

function PracticeInterface() {
  const location = useLocation();
  const navigate = useNavigate();
  const tables = useMemo(() => location.state?.tables || [], [location.state]);
  
  // Generate questions only once when component mounts or tables change
  interface Question {
    a: number;
    b: number;
    swap: boolean;
  }

  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Initialize questions only when component mounts
  useEffect(() => {
    if (tables.length === 0) {
      navigate('/');
      return;
    }
    
    // Generate and shuffle questions
    const generateQuestions = () => {
      const combos = tables.flatMap((a: number) =>
        Array.from({ length: 12 }, (_, i) => ({ a, b: i + 1, swap: Math.random() < 0.5 }))
      );

      // Deduplicate: only one per unique product, regardless of order
      const seen = new Set<string>();
      const deduped: typeof combos = [];
      for (const q of combos) {
        // Use the sorted pair as the key
        const key = [Math.min(q.a, q.b), Math.max(q.a, q.b)].join('x');
        if (!seen.has(key)) {
          seen.add(key);
          deduped.push(q);
        }
      }

      // Shuffle using a more efficient algorithm
      const shuffled = [...deduped];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }

      return shuffled;
    };
    
    // Use setTimeout to prevent UI blocking during question generation
    setTimeout(() => {
      const generatedQuestions = generateQuestions();
      setQuestions(generatedQuestions);
      setIsLoading(false);
    }, 0);
  }, [tables, navigate]);
  
  const maxQuestions = questions.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const question = questions[currentIndex] || { a: 1, b: 1, swap: false };
  
  const [finished, setFinished] = useState(false);
  const [hint, setHint] = useState('');
  const [lastWrong, setLastWrong] = useState('');
  const [input, setInput] = useState('');
  type FeedbackType = '' | 'correct' | 'incorrect';
  const [feedback, setFeedback] = useState<FeedbackType>('');
  const [inputLocked, setInputLocked] = useState(false);
  const [total, setTotal] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [time, setTime] = useState(0);
  
  // Lazy-load hints only when needed
  interface HintMap {
    [key: string]: string;
  }

  const [mdHints, setMdHints] = useState<HintMap>({});
  
  // Audio references
  const audioRef = useRef(new Audio('sound/woo-hoo-82843.mp3'));
  const correctAudioRef = useRef(new Audio('sound/correct-choice-43861.mp3'));
  const incorrectAudioRef = useRef(new Audio('sound/wrong-47985.mp3'));

  // Preload audio to avoid delays when playing
  useEffect(() => {
    [audioRef, correctAudioRef, incorrectAudioRef].forEach(ref => {
      ref.current.load();
    });
  }, []);
  
  // Load hint only when needed
  const loadHint = useCallback(async (key: string) => {
    // If hint is already loaded, use it
    if (mdHints[key]) return mdHints[key];
    
    // Otherwise load it
    try {
      const hintPath = Object.keys(hintModules).find(path => path.includes(`/${key}.md`));
      if (hintPath) {
        const raw = await hintModules[hintPath]() as string;
        const newHints: HintMap = { ...mdHints, [key]: raw };
        setMdHints(newHints);
        return raw;
      }
    } catch (error) {
      console.error("Error loading hint:", error);
    }
    return null;
  }, [mdHints]);

  // Show confetti on completion
  useEffect(() => {
    if (finished) {
      confetti({ particleCount: 200, spread: 70, origin: { y: 0.6 } });
      audioRef.current.play().catch(e => console.log("Audio play error:", e));
    }
  }, [finished]);

  // Timer effect
  useEffect(() => {
    if (!finished && !isLoading) {
      const timer = setInterval(() => setTime(t => t + 1), 1000);
      return () => clearInterval(timer);
    }
  }, [finished, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputLocked) return;
    setInputLocked(true);
    const answerInt = parseInt(input, 10);
    if (isNaN(answerInt)) {
      setInputLocked(false);
      return;
    }
    
    const correctAnswer = question.a * question.b;
    
    if (answerInt === correctAnswer) {
      correctAudioRef.current.play().catch(e => console.log("Audio play error:", e));
      setFeedback('correct');
      setLastWrong('');
      setHint('');
      
      // Batch state updates
      const newTotal = total + 1;
      const newCorrect = correct + 1;
      
      setTotal(newTotal);
      setCorrect(newCorrect);
      
      if (newTotal < maxQuestions) {
        // Delay moving to next question to show feedback
        setTimeout(() => {
          setCurrentIndex(i => i + 1);
          setFeedback('');
          setInput('');
          setInputLocked(false);
        }, 500);
      } else {
        setFinished(true);
        setInputLocked(false);
      }
    } else {
      incorrectAudioRef.current.play().catch(e => console.log("Audio play error:", e));
      setLastWrong(input);
      setFeedback('incorrect');
      setInput('');
      setTimeout(() => setInputLocked(false), 500); // Lock briefly to prevent spamming Enter
      // Load hint on demand
      setHint('Loading hint...');
      const key = String(Math.min(question.a, question.b));
      const raw = await loadHint(key);
      
      if (raw) {
        const magicRuleMatch = raw.match(/##+\s*Hint\s*\n([\s\S]*?)(?=\n##)/i);
        // const examplesMatch = raw.match(/##+\s*Examples\s*\n([\s\S]*?)(?=\n##)/i);
        const magicRule = magicRuleMatch ? magicRuleMatch[1].replace(/\*/g, '').trim() : '';
        // const examples = examplesMatch
        //   ? examplesMatch[1]
        //       .replace(/^-\s*/gm, '')
        //       .replace(/\n/g, ' OR ')
        //       .replace(/\s*OR\s*$/, '')
        //       .trim()
        //   : '';
        
        const hintText = `Hint: ${magicRule}`;
        // if (examples) hintText += `\n${examples}`;
        setHint(hintText);
      } else {
        setHint('No hint available for this question.');
      }
    }
  };

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-lg">Preparing your practice questions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <PracticeDialog
        finished={finished}
        correct={correct}
        maxQuestions={maxQuestions}
        time={time}
        formatTime={formatTime}
        onBackToHome={() => navigate('/')}
      />
      <main className="flex-1 flex items-start justify-center py-4 px-2 sm:py-8 sm:px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
            {/* Left Column - Question and Stats */}
            <div className="w-full lg:w-[600px] flex flex-col gap-4 sm:gap-6 order-2 lg:order-1">
              {/* Stats - First on mobile */}
              <div className="order-1 lg:order-2">
                <PracticeStats
                  total={total}
                  maxQuestions={maxQuestions}
                  time={time}
                  formatTime={formatTime}
                />
              </div>
              
              {/* Monster - Second on mobile */}
              <div className="order-2 lg:order-1">
                <PracticeQuestion question={question} />
              </div>
            </div>

            {/* Right Column - Answer */}
            <div className="w-full lg:w-[600px] order-3 lg:order-2">
              <PracticeAnswer
                input={input}
                setInput={setInput}
                handleSubmit={handleSubmit}
                feedback={feedback}
                lastWrong={lastWrong}
                hint={hint}
                inputLocked={inputLocked}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PracticeInterface;