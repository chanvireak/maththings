import * as React from 'react';
import { Button } from './ui/button.tsx';

interface PracticeAnswerProps {
  input: string;
  setInput: (val: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  feedback: 'correct' | 'incorrect' | '';
  lastWrong: string;
  hint: string;
}

const PracticeAnswer: React.FC<PracticeAnswerProps> = ({
  input,
  setInput,
  handleSubmit,
  feedback,
  lastWrong,
  hint,
}) => {
  const [overflow, setOverflow] = React.useState(false);
  const [lastOverflow, setLastOverflow] = React.useState<string>("");

  return (
    <section className="w-full h-full rounded-2xl shadow-2xl bg-white flex flex-col border border-yellow-100">
      <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-t-2xl text-white px-4 sm:px-6 py-3 sm:py-4 font-extrabold text-lg sm:text-xl text-center tracking-tight shadow">
        Cast Your Spell
      </div>
      <div className="flex-1 flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 lg:h-[calc(224px+32px+160px)]">
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
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={input}
            onChange={e => {
              const raw = e.target.value.replace(/\D/g, "");
              if (Number(raw) > 144) {
                setOverflow(true);
                setLastOverflow(raw);
                setInput("");
              } else {
                setOverflow(false);
                setInput(raw);
              }
            }}
            autoFocus
            className="w-24 sm:w-32 h-20 sm:h-24 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-700 text-center border-2 border-gray-300 rounded-lg appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]"
          />
          <Button type="submit" className="mt-1 sm:mt-2 px-4 sm:px-6 py-2 rounded-lg font-bold text-base sm:text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-600 hover:bg-yellow-700 text-white">Cast Spell</Button>
        </form>
      </div>
    </section>
  );
};

export default PracticeAnswer;