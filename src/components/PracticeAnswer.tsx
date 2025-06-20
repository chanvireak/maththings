import * as React from 'react'; // Import React and its hooks for building components
import { Button } from './ui/button.tsx'; // Import custom Button component for submission

interface PracticeAnswerProps {
  input: string;
  setInput: (val: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  feedback: 'correct' | 'incorrect' | '';
  lastWrong: string;
  hint: string;
  inputLocked: boolean;
} // PracticeAnswerProps: defines expected props for PracticeAnswer component

const PracticeAnswer: React.FC<PracticeAnswerProps> = ({
  input,
  setInput,
  handleSubmit,
  feedback,
  lastWrong,
  hint,
  inputLocked,
}) => {
  const [overflow, setOverflow] = React.useState(false); // State: tracks if user input exceeds allowed maximum
  const [lastOverflow, setLastOverflow] = React.useState<string>(""); // State: stores last overflow value to display error message

  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (!inputLocked && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputLocked]);

  return (
    // Render the PracticeAnswer UI container section
    <section className="w-full h-full rounded-2xl shadow-2xl bg-white flex flex-col border border-yellow-100">
      <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-t-2xl text-white px-4 sm:px-6 py-3 sm:py-4 font-extrabold text-lg sm:text-xl text-center tracking-tight shadow">
        Cast Your Spell
      </div>
      <div className="flex-1 flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 lg:h-[calc(224px+32px+160px)]">
        {/* Display overflow warning, success, or incorrect feedback based on state */}
        <div className="h-32 sm:h-36 lg:h-56 flex flex-col items-center justify-center mb-4 text-center overflow-y-auto">
          {overflow ? (
            <div className="text-yellow-700">
              <p className="text-2xl sm:text-3xl lg:text-4xl text-red-700 font-bold mb-2">{lastOverflow}?</p>
              <p className="text-sm sm:text-base italic mb-2">That's beyond our magic scroll!</p>
              <p className="text-sm sm:text-base text-muted-foreground mb-2">Hint: Only spells up to 144 exist in the Land of MathThings!</p>
            </div>
          ) : feedback === 'correct' ? (
            <div className="text-green-600 font-bold text-2xl sm:text-3xl lg:text-4xl">
              🎉 Correct! 🎉
            </div>
          ) : feedback === 'incorrect' ? (
            <>
              <div className="text-yellow-700">
                <p className="text-2xl sm:text-3xl lg:text-4xl text-red-700 font-bold mb-2">Oops!</p>
                <p className="text-sm sm:text-base italic mb-2">{lastWrong} was not a correct spell.</p>                
              </div>
              <div className="text-xs sm:text-sm mt-2 whitespace-pre-line text-muted-foreground">
                {hint}
              </div>
            </>
          ) : null}
        </div>
        <form onSubmit={handleSubmit} className="w-full max-w-xs flex flex-col items-center gap-3 sm:gap-4">
          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={input}
            onChange={e => {
              // Handle input change: sanitize input and enforce max spell limit
              const raw = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
              if (Number(raw) > 144) { // Overflow check: maximum spell value is 144
                setOverflow(true);
                setLastOverflow(raw);
                setInput("");
              } else { // Valid input: update state and clear overflow
                setOverflow(false);
                setInput(raw);
              }
            }}
            autoFocus={false}
            disabled={inputLocked}
            className="w-24 sm:w-32 h-20 sm:h-24 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-700 text-center border-2 border-gray-300 rounded-lg appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
          />
          <Button type="submit" className="mt-1 sm:mt-2 px-4 sm:px-6 py-2 rounded-lg font-bold text-base sm:text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-600 hover:bg-yellow-700 text-white" disabled={inputLocked}>Cast Spell</Button>
        </form>
      </div>
    </section>
  );
};

export default PracticeAnswer;