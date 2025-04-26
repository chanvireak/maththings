// Import Link for client-side routing
import { Link } from 'react-router-dom';
// Import useState hook to manage mobile menu toggle
import { useState } from 'react';
// Import Menu and X icons for opening/closing the menu
import { Menu, X } from 'lucide-react';

// Header component: sticky top bar with brand, navigation, and notification banner
function Header() {
  // State: controls visibility of mobile menu
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    // Sticky header wrapper with backdrop blur and border
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-blue-100 shadow-sm">
      {/* Container: holds brand and navigation toggle */}
      <div className="max-w-5xl container mx-auto px-2 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Brand title / logo */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <span className="text-2xl font-extrabold text-yellow-700 tracking-tight">MathThings!</span>
          {/* Mobile menu toggle button (visible on small screens) */}
          <button
            className="sm:hidden p-2 rounded-md hover:bg-blue-50 transition-colors ml-2"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(v => !v)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Navigation links: toggles open/closed on mobile */}
        <nav
          className={`flex-col sm:flex-row flex gap-2 sm:gap-6 text-base font-medium items-center sm:items-center justify-center transition-all duration-200 ${menuOpen ? 'flex' : 'hidden'} sm:flex`}
        >
          <Link to="/" onClick={() => setMenuOpen(false)} className="px-6 py-2 rounded-lg font-bold text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-600 hover:bg-yellow-700 text-white">Home</Link>
          <Link to="/map" onClick={() => setMenuOpen(false)} className="px-6 py-2 rounded-lg font-bold text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-600 hover:bg-yellow-700 text-white">Quest Map</Link> 
          <Link to="/about" onClick={() => setMenuOpen(false)} className="px-6 py-2 rounded-lg font-bold text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-600 hover:bg-yellow-700 text-white">About</Link>
        </nav>
      </div>
      {/* Notification banner below header */}
      <div className="w-full bg-[#e8f0fe] text-yellow-800 text-base py-2 px-4 text-center border-b border-blue-100 shadow-sm">
        📶 Our WiFi doesn't go on strike! Thank <span className="text-yellow-800 font-bold">Nariza</span> for hosting our MathThings! party this month! 🥳
      </div>
    </header>
  );
}

// Export Header component as default
export default Header;
