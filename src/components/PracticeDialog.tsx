import * as React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from './ui/dialog.tsx';
import { Button } from './ui/button.tsx';

interface PracticeDialogProps {
  finished: boolean;
  correct: number;
  maxQuestions: number;
  time: number;
  formatTime: (seconds: number) => string;
  onBackToHome: () => void;
}

const PracticeDialog: React.FC<PracticeDialogProps> = ({ finished, time, formatTime, onBackToHome }) => (
  <Dialog
    open={finished}
    onOpenChange={(open) => {
      if (!open) {
        onBackToHome(); 
      }
    }}
  >
    <DialogContent className="text-center text-bold text-lg text-green-700 drop-shadow max-w-sm mx-auto">
      <DialogHeader>
        <DialogTitle className="mb-4 text-center text-bold text-2xl">🎉 Congratulations! 🎉</DialogTitle>
        <DialogDescription>
                    <div className="mb-4 text-center text-bold text-4xl text-green-700 drop-shadow">⌛ Your Time: {formatTime(time)} ⌛</div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button
          className="mx-auto flex justify-center items-center text-center px-6 py-2 rounded-lg font-bold text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-600 hover:bg-yellow-700 text-white"
          onClick={onBackToHome}
        >
        Home
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default PracticeDialog;
