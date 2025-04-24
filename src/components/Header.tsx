import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-blue-100 shadow-sm">
      <div className="max-w-5xl container mx-auto px-2 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between w-full sm:w-auto">
          <span className="text-2xl font-extrabold text-yellow-700 tracking-tight">🧮 MathThings!</span>
          <button
            className="sm:hidden p-2 rounded-md hover:bg-blue-50 transition-colors ml-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav
          className={`flex-col sm:flex-row flex gap-2 sm:gap-6 text-base font-medium items-center sm:items-center justify-center transition-all duration-200 ${menuOpen ? 'flex' : 'hidden'} sm:flex`}
        >
          <Link to="/" className="px-6 py-2 rounded-lg font-bold text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-600 hover:bg-yellow-700 text-white">Home</Link>
          <Link to="/map" className="px-6 py-2 rounded-lg font-bold text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-600 hover:bg-yellow-700 text-white">Quest Map</Link> 
          <Link to="/about" className="px-6 py-2 rounded-lg font-bold text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-600 hover:bg-yellow-700 text-white">About</Link>
        </nav>
      </div>
      <div className="w-full bg-[#e8f0fe] text-yellow-800 text-base py-2 px-4 text-center border-b border-blue-100 shadow-sm">
        📶 Our WiFi doesn't go on strike! Thank <span className="text-yellow-800 font-bold">Nariza</span> for hosting our 🧮 MathThings! party this month! 🥳
      </div>
    </header>
  );
}

export default Header;
