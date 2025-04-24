import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header.tsx'
import Home from './pages/Home.tsx'
import Practice from './pages/Practice.tsx'
import About from './pages/About.tsx'
import Map from './pages/map.tsx'

// import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f7fafd]">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/about" element={<About />} />            
            <Route path="/map" element={<Map />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
