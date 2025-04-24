export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 mt-12 shadow-inner rounded-t-2xl">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4">
        
        <div className="flex gap-4 items-center text-base">
          <a
            href="https://github.com/yourgithubrepo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-50/80 border border-yellow-200 text-yellow-700 font-semibold px-4 py-2 rounded-xl shadow-sm hover:bg-yellow-100 hover:text-yellow-900 transition-colors focus-visible:ring-2 focus-visible:ring-yellow-400 focus:outline-none"
          >
            GitHub
          </a>
          <a
            href="https://www.buymeacoffee.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-50/80 border border-yellow-200 text-yellow-700 font-semibold px-4 py-2 rounded-xl shadow-sm hover:bg-yellow-100 hover:text-yellow-900 transition-colors focus-visible:ring-2 focus-visible:ring-yellow-400 focus:outline-none"
          >
            Buy Me a Coffee
          </a>
        </div>
      </div>
    </footer>
  );
}
