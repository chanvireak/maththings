// App entry point: sets up routing and main layout
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Site header component import
import Header from "./components/Header.tsx";
// Page components: Home, Practice, About, Map
import Home from "./pages/Home.tsx";
import Practice from "./pages/Practice.tsx";
import About from "./pages/About.tsx";
import Map from "./pages/map.tsx";

function App() {
  return (
    <Router>
      {" "}
      {/* React Router provider for client-side navigation */}
      <div className="flex flex-col min-h-screen bg-[#f7fafd]">
        {" "}
        {/* App container: flex column layout, full viewport height, background color */}
        {/* Site header/navigation bar */}
        <Header />
        {/* Main content area for routed pages */}
        <main className="flex-1 flex flex-col items-center justify-center w-full">
          {/* Define application routes */}
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<Home />} /> 
            {/* Practice page route */}
            <Route path="/practice" element={<Practice />} />{" "}
            {/* About page route */}
            <Route path="/about" element={<About />} /> 
            {/* Map/Tricks page route */}
            <Route path="/map" element={<Map />} />{" "}            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

// Export App component as default export
export default App;
