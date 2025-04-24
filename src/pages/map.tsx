import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
// dynamically import markdown hints as raw text
const hintModules = import.meta.glob<string>("../trick-doc/*.md", { query: "?raw", import: "default" });

// Data for each table hint (keys only; content loaded dynamically)
const tableData: Record<number, unknown> = {
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
  6: {},
  7: {},
  8: {},
  9: {},
  10: {},
  11: {},
  12: {},
};

function Learn() {
  const [selected, setSelected] = useState<string>("overview");
  const [mdHints, setMdHints] = useState<Record<string, string>>({});
  const selNum = Number(selected);
  const table = tableData[selNum];

  useEffect(() => {
    Object.entries(hintModules).forEach(([path, loader]) => {
      const m = path.match(/(\d+)\.md$/);
      if (m) {
        loader().then(raw => {
          setMdHints(h => ({ ...h, [m[1]]: raw }));
        });
      } else if (/overview\.md$/.test(path)) {
        loader().then(raw => {
          setMdHints(h => ({ ...h, overview: raw }));
        });
      }
    });
  }, []);

  // Overview content component: render overview markdown
  const OverviewContent = () => {
    const content = mdHints["overview"];
    if (!content) return <p className="text-center text-yellow-500">Loading overview…</p>;
    return (
      <div className="px-6 py-4 bg-white text-yellow-800 rounded-lg h-full overflow-y-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: (props) => <h1 className="text-2xl font-extrabold text-yellow-700 my-4" {...props} />, 
            h2: (props) => <h2 className="text-xl font-bold text-yellow-800 my-3" {...props} />, 
            h3: (props) => <h3 className="text-base font-semibold text-yellow-800 my-2" {...props} />, 
            p: (props) => <p className="mb-3 leading-relaxed" {...props} />, 
            ul: (props) => <ul className="list-disc list-inside mb-4 ml-6 space-y-1" {...props} />, 
            li: (props) => <li {...props} />, 
            img: (props) => <img className="rounded-lg mb-4" {...props} />, 
            a: (props) => <a className="text-blue-600 underline hover:text-blue-800" {...props} />
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  };

  // Table content component: render markdown hint files directly
  const TableContent = () => {
    const content = mdHints[selNum];
    if (!content) return <p className="text-center text-yellow-500">Loading content…</p>;
    return (
      <div className="px-6 py-4 bg-white text-yellow-800 rounded-lg h-full overflow-y-auto">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: (props) => <h1 className="text-2xl font-extrabold text-yellow-700 my-4" {...props} />, 
            h2: (props) => <h2 className="text-base font-bold text-yellow-800 my-3" {...props} />,
            h3: () => null, 
            p: (props) => <p className="mb-3 leading-relaxed" {...props} />, 
            ul: (props) => <ul className="list-disc list-inside mb-4 ml-6 space-y-1" {...props} />, 
            li: (props) => <li {...props} />, 
            img: (props) => <img className="rounded-lg mb-4" {...props} />, 
            a: (props) => <a className="text-blue-600 underline hover:text-blue-800" {...props} />
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  };

  return (
    // <main className="w-full min-h-screen flex items-center justify-center bg-yellow-50 px-4 py-8">
    <main className="w-full min-h-screen flex flex-col items-center justify-start bg-yellow-50 px-4 py-8">
      <section className="w-full max-w-4xl rounded-3xl shadow-2xl bg-white border border-yellow-100 overflow-hidden">
        <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white px-6 py-6 font-extrabold text-2xl sm:text-3xl text-center tracking-tight shadow">
          MathThings Quest Map & Tricks
        </div>

        <div className="flex flex-col md:flex-row h-full">
          {/* Left column - Navigation */}
          <div className="w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r border-yellow-100 bg-yellow-50 md:min-h-96">
            <h2
              className={`text-lg font-bold mb-4 cursor-pointer rounded-lg px-3 py-2 transition-colors ${
                selected === 'overview' 
                  ? "bg-yellow-100 text-yellow-800" 
                  : "text-yellow-700 hover:bg-yellow-100"
              }`}
              onClick={() => setSelected('overview')}
            >
              🗺️ Quest Map
            </h2>
            
            <h2 className="text-lg font-bold text-yellow-800 mb-4">🪄 Magic Spells</h2>
            <div className="grid grid-cols-3 gap-3">
              {Object.keys(tableData).map((k) => (
                <button
                  key={k}
                  onClick={() => setSelected(k)}
                  className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                    selected === k
                      ? "bg-yellow-600 border-yellow-300 text-white shadow-lg"
                      : "bg-white border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                  }`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          {/* Right column - Content */}
          <div className="w-full md:w-3/4 p-4 md:p-6 bg-yellow-50">
            <div className="bg-white rounded-2xl shadow h-full min-h-96">
              {selected === "overview" ? (
                <OverviewContent />
              ) : table ? (
                <TableContent />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Learn;