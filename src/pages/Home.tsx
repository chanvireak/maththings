import TableSelector from '../components/TableSelector.tsx';
// Home page component displaying welcome messages and table selector

function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start bg-yellow-50 px-4 py-8 sm:py-16">      
      {/* Main container: full-screen flex layout with yellow background */}
      <section className="w-full max-w-3xl rounded-3xl shadow-2xl bg-white flex flex-col items-center border border-yellow-100 overflow-hidden">
        {/* Card wrapper: white background, rounded corners, shadow, border */}
        <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white px-6 py-6 font-extrabold text-2xl sm:text-3xl w-full text-center tracking-tight shadow">
          {/* Hero header: gradient background with title */}
          Welcome to <span className="text-white drop-shadow">MathThings!</span>
        </div>
        
        <div className="p-6 sm:p-8 w-full max-w-2xl flex flex-col space-y-4 text-yellow-700 text-base sm:text-lg">
          {/* Content wrapper: introductory messages */}
          <p>Welcome, brave Math Explorer! 🧙‍♀️</p>
          <p>Ready to journey through the Land of MathThings?</p>
          <p>Here, numbers come alive and each of the 12 magical Spell Card hides a special trick waiting for you to discover!</p>
          <p>Pick your first Spell Card/Wizardry Level, practice your skills, and transform from explorer to Multiplication Wizard.</p>            
          <p>Let the quest begin! ✨</p>
          
          <div className="w-full flex justify-center py-4">
            {/* TableSelector component: multiplication table picker */}
            <TableSelector />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;