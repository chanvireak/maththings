import * as React from 'react';

interface PracticeStatsProps {
  total: number;
  maxQuestions: number;
  time: number;
  formatTime: (seconds: number) => string;
}

const PracticeStats: React.FC<PracticeStatsProps> = ({ total, maxQuestions, time, formatTime }) => (
  <section className="w-full rounded-2xl shadow-2xl bg-white flex flex-col border border-yellow-200">
    <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-t-2xl text-white px-4 sm:px-6 py-3 sm:py-4 font-extrabold text-lg sm:text-xl text-center tracking-tight shadow">
      Stats
    </div>
    <div className="flex flex-row sm:flex-col items-center sm:items-start justify-around sm:justify-start gap-2 sm:gap-4 p-4 sm:p-6 text-base sm:text-lg h-24 sm:h-32 lg:h-40">
      <div className="text-yellow-700 font-semibold px-2 sm:px-3 py-2 sm:py-3">
        Progress: <span className="font-bold">{total} / {maxQuestions}</span>
      </div>
      
      {/* <div className="bg-yellow-50/80 border border-yellow-200 text-yellow-700 font-semibold px-4 py-5 rounded-xl shadow-sm hover:bg-yellow-100 hover:text-yellow-900 transition-colors focus-visible:ring-2 focus-visible:ring-yellow-400 focus:outline-none w-full">
        Score: <span className="font-bold">{correct} / {maxQuestions}</span>
      </div> */}
      
      <div className="text-yellow-700 font-semibold px-2 sm:px-3 py-2 sm:py-3">
        Time: <span className="font-bold">{formatTime(time)}</span>
      </div>
    </div>
  </section>
);

export default PracticeStats;