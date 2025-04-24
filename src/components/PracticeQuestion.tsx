import * as React from 'react';

interface PracticeQuestionProps {
  question: { a: number; b: number; swap: boolean };
}

const PracticeQuestion: React.FC<PracticeQuestionProps> = ({ question }) => (
  <section className="w-full rounded-2xl shadow-2xl bg-white flex flex-col border border-yellow-100">
    <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-t-2xl text-white px-4 sm:px-6 py-3 sm:py-4 font-extrabold text-lg sm:text-xl text-center tracking-tight shadow">
      Monster
    </div>
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-8 h-40 sm:h-48 lg:h-56">
      <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-700 drop-shadow text-center">
        {question.swap ? question.b : question.a} × {question.swap ? question.a : question.b} = ?
      </span>
    </div>
  </section>
);

export default PracticeQuestion;
