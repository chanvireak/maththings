import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const presets = [
  { label: 'Beginner', tables: [1, 2] },
  { label: 'Intermediate', tables: Array.from({ length: 5 }, (_, i) => i + 1) },
  { label: 'Advanced', tables: Array.from({ length: 12 }, (_, i) => i + 1) }  
];

function TableSelector() {
  const [selectedTables, setSelectedTables] = useState<number[]>([]);
  const navigate = useNavigate();

  const toggleTable = (n: number) => {
    setSelectedTables(prev =>
      prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n]
    );
  };

  const applyPreset = (tables: number[]) => {
    setSelectedTables(tables);
  };

  const startPractice = () => {
    navigate('/practice', { state: { tables: selectedTables } });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-xl font-bold mb-4 text-yellow-700">Pick Spell Card/Wizardry Level</h3>
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {presets.map(p => (
          <button
            key={p.label}
            onClick={() => applyPreset(p.tables)}
            className="mt-2 px-6 py-2 rounded-lg font-bold text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-600 hover:bg-yellow-700 text-white"
          >
            {p.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-3 mb-6">
        {Array.from({ length: 12 }, (_, i) => i + 1).map(n => (
          <button
            key={n}
            onClick={() => toggleTable(n)}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 ${selectedTables.includes(n)
              ? 'bg-yellow-600 border-yellow-300 text-white shadow-lg'
              : 'bg-white border-yellow-400 text-yellow-600 hover:bg-yellow-50'}`}
          >
            {n}
          </button>
        ))}
      </div>
      <button
        onClick={startPractice}
        disabled={selectedTables.length === 0}
        className={`mt-2 px-6 py-2 rounded-lg font-bold text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 ${selectedTables.length === 0
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-yellow-600 hover:bg-yellow-700 text-white'}`}
      >
        Start the Quest
      </button>
    </div>
  );
}

export default TableSelector;
