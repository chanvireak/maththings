// About page component displaying information about MathThings
function About() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-start bg-yellow-50 px-4 py-8 sm:py-16"> 
    {/* Main container: full-screen flex layout with yellow background */}
      <section className="w-full max-w-3xl rounded-3xl shadow-2xl bg-white flex flex-col items-center border border-yellow-100 overflow-hidden">
        {/* Hero header with gradient background and project title */}
        <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white px-6 py-6 font-extrabold text-2xl sm:text-3xl w-full text-center tracking-tight shadow">
          About <span className="text-white drop-shadow">MathThings!</span>
        </div>
        
        {/* Content wrapper for informational sections */}
        <div className="p-4 sm:p-8 w-full flex flex-col">
          {/* What is MathThings? section explaining the purpose */}
          <section className="w-full py-4">
            <h2 className="text-yellow-600 text-2xl font-bold mb-2">What is MathThings?</h2>
            <p className="text-yellow-700 text-lg sm:text-xl max-w-2xl">
              MathThings! is an interactive web app that helps elementary students practice multiplication tables in a fun and engaging way. It’s designed to make learning math enjoyable for learners of all levels.
            </p>
          </section>

          {/* How to Use section with usage instructions */}
          <section className="w-full py-4">
            <h2 className="text-yellow-600 text-2xl font-bold mb-2">How to Use</h2>
            <ol className="text-yellow-700 text-lg sm:text-xl max-w-2xl list-decimal list-inside space-y-2">
              <li>Select the multiplication table you want to practice.</li>
              <li>Answer the questions as they appear on the screen.</li>
              <li>Track your progress and speed with real-time feedback.</li>
              <li>Retry tables or advance to more challenging levels as you improve!</li>
            </ol>
          </section>

          {/* Self-Hosting section linking to GitHub repository */}
          <section className="w-full py-4">
            <h2 className="text-yellow-600 text-2xl font-bold mb-2">Self-Hosting</h2>
            <p className="text-yellow-700 text-lg sm:text-xl max-w-2xl">
              Want to run MathThings! on your own server? Check out our <a href="https://github.com/chanvireak/maththings" className="text-yellow-600 hover:text-yellow-700 transition" target="_blank" rel="noopener noreferrer">GitHub</a> repository for setup instructions and source code.
            </p>
          </section>

          {/* Acknowledgments section listing open-source dependencies */}
          <section className="w-full py-4">
            <h2 className="text-yellow-600 text-2xl font-bold mb-2">Acknowledgments</h2>
            <p className="text-yellow-700 text-lg sm:text-xl max-w-2xl mb-2">
            This project wouldn't be possible without these amazing open-source projects:
            </p>
            <ul className="text-yellow-700 text-left text-lg sm:text-xl font-base max-w-2xl list-disc list-inside space-y-1">
              <li><a href="https://reactjs.org/" className="text-yellow-600 hover:text-yellow-700 transition" target="_blank" rel="noopener noreferrer">React</a></li>
              <li><a href="https://www.typescriptlang.org/" className="text-yellow-600 hover:text-yellow-700 transition" target="_blank" rel="noopener noreferrer">TypeScript</a></li>
              <li><a href="https://tailwindcss.com/" className="text-yellow-600 hover:text-yellow-700 transition" target="_blank" rel="noopener noreferrer">Tailwind CSS</a></li>
              <li><a href="https://vitejs.dev/" className="text-yellow-600 hover:text-yellow-700 transition" target="_blank" rel="noopener noreferrer">Vite</a></li>
              <li><a href="https://pixabay.com/users/freesound_community-46691455/" className="text-yellow-600 hover:text-yellow-700 transition" target="_blank" rel="noopener noreferrer">Freesound Community</a></li>
              
            </ul>
          </section>

          {/* Support the Project section with donation button */}
          <section className="w-full py-4">
            <h2 className="text-yellow-600 text-2xl font-bold mb-2">Support the Project</h2>
            <p className="text-yellow-700 text-lg sm:text-xl max-w-2xl">
              If you find MathThings! helpful, consider supporting the project. Your support helps cover hosting costs and enables continued development and maintenance of the project.             
            </p>
            <p className="mt-4"><a href="https://www.buymeacoffee.com/anntha"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=anntha&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a></p>
          </section>
        </div>
      </section>
    </main>
  );
}

export default About;