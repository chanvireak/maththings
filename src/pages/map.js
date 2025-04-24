"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_markdown_1 = require("react-markdown");
var remark_gfm_1 = require("remark-gfm");
// dynamically import markdown hints as raw text
var hintModules = import.meta.glob("../trick-doc/*.md", { query: "?raw", import: "default" });
// Data for each table hint (keys only; content loaded dynamically)
var tableData = {
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
    var _a = (0, react_1.useState)("overview"), selected = _a[0], setSelected = _a[1];
    var _b = (0, react_1.useState)({}), mdHints = _b[0], setMdHints = _b[1];
    var selNum = Number(selected);
    var table = tableData[selNum];
    (0, react_1.useEffect)(function () {
        Object.entries(hintModules).forEach(function (_a) {
            var path = _a[0], loader = _a[1];
            var m = path.match(/(\d+)\.md$/);
            if (m) {
                loader().then(function (raw) {
                    setMdHints(function (h) {
                        var _a;
                        return (__assign(__assign({}, h), (_a = {}, _a[m[1]] = raw, _a)));
                    });
                });
            }
            else if (/overview\.md$/.test(path)) {
                loader().then(function (raw) {
                    setMdHints(function (h) { return (__assign(__assign({}, h), { overview: raw })); });
                });
            }
        });
    }, []);
    // Overview content component: render overview markdown
    var OverviewContent = function () {
        var content = mdHints["overview"];
        if (!content)
            return (0, jsx_runtime_1.jsx)("p", { className: "text-center text-yellow-500", children: "Loading overview\u2026" });
        return ((0, jsx_runtime_1.jsx)("div", { className: "px-6 py-4 bg-white text-yellow-800 rounded-lg h-full overflow-y-auto", children: (0, jsx_runtime_1.jsx)(react_markdown_1.default, { remarkPlugins: [remark_gfm_1.default], components: {
                    h1: function (props) { return (0, jsx_runtime_1.jsx)("h1", __assign({ className: "text-2xl font-extrabold text-yellow-700 my-4" }, props)); },
                    h2: function (props) { return (0, jsx_runtime_1.jsx)("h2", __assign({ className: "text-xl font-bold text-yellow-800 my-3" }, props)); },
                    h3: function (props) { return (0, jsx_runtime_1.jsx)("h3", __assign({ className: "text-base font-semibold text-yellow-800 my-2" }, props)); },
                    p: function (props) { return (0, jsx_runtime_1.jsx)("p", __assign({ className: "mb-3 leading-relaxed" }, props)); },
                    ul: function (props) { return (0, jsx_runtime_1.jsx)("ul", __assign({ className: "list-disc list-inside mb-4 ml-6 space-y-1" }, props)); },
                    li: function (props) { return (0, jsx_runtime_1.jsx)("li", __assign({}, props)); },
                    img: function (props) { return (0, jsx_runtime_1.jsx)("img", __assign({ className: "rounded-lg mb-4" }, props)); },
                    a: function (props) { return (0, jsx_runtime_1.jsx)("a", __assign({ className: "text-blue-600 underline hover:text-blue-800" }, props)); }
                }, children: content }) }));
    };
    // Table content component: render markdown hint files directly
    var TableContent = function () {
        var content = mdHints[selNum];
        if (!content)
            return (0, jsx_runtime_1.jsx)("p", { className: "text-center text-yellow-500", children: "Loading content\u2026" });
        return ((0, jsx_runtime_1.jsx)("div", { className: "px-6 py-4 bg-white text-yellow-800 rounded-lg h-full overflow-y-auto", children: (0, jsx_runtime_1.jsx)(react_markdown_1.default, { remarkPlugins: [remark_gfm_1.default], components: {
                    h1: function (props) { return (0, jsx_runtime_1.jsx)("h1", __assign({ className: "text-2xl font-extrabold text-yellow-700 my-4" }, props)); },
                    h2: function (props) { return (0, jsx_runtime_1.jsx)("h2", __assign({ className: "text-base font-bold text-yellow-800 my-3" }, props)); },
                    h3: function () { return null; },
                    p: function (props) { return (0, jsx_runtime_1.jsx)("p", __assign({ className: "mb-3 leading-relaxed" }, props)); },
                    ul: function (props) { return (0, jsx_runtime_1.jsx)("ul", __assign({ className: "list-disc list-inside mb-4 ml-6 space-y-1" }, props)); },
                    li: function (props) { return (0, jsx_runtime_1.jsx)("li", __assign({}, props)); },
                    img: function (props) { return (0, jsx_runtime_1.jsx)("img", __assign({ className: "rounded-lg mb-4" }, props)); },
                    a: function (props) { return (0, jsx_runtime_1.jsx)("a", __assign({ className: "text-blue-600 underline hover:text-blue-800" }, props)); }
                }, children: content }) }));
    };
    return (
    // <main className="w-full min-h-screen flex items-center justify-center bg-yellow-50 px-4 py-8">
    (0, jsx_runtime_1.jsx)("main", { className: "w-full min-h-screen flex flex-col items-center justify-start bg-yellow-50 px-4 py-8", children: (0, jsx_runtime_1.jsxs)("section", { className: "w-full max-w-4xl rounded-3xl shadow-2xl bg-white border border-yellow-100 overflow-hidden", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white px-6 py-6 font-extrabold text-2xl sm:text-3xl text-center tracking-tight shadow", children: "MathThings Quest Map & Tricks" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row h-full", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r border-yellow-100 bg-yellow-50 md:min-h-96", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-bold mb-4 cursor-pointer rounded-lg px-3 py-2 transition-colors ".concat(selected === 'overview'
                                        ? "bg-yellow-100 text-yellow-800"
                                        : "text-yellow-700 hover:bg-yellow-100"), onClick: function () { return setSelected('overview'); }, children: "\uD83D\uDDFA\uFE0F Quest Map" }), (0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-bold text-yellow-800 mb-4", children: "\uD83E\uDE84 Magic Spells" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-3 gap-3", children: Object.keys(tableData).map(function (k) { return ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return setSelected(k); }, className: "w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 ".concat(selected === k
                                            ? "bg-yellow-600 border-yellow-300 text-white shadow-lg"
                                            : "bg-white border-yellow-400 text-yellow-600 hover:bg-yellow-50"), children: k }, k)); }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-3/4 p-4 md:p-6 bg-yellow-50", children: (0, jsx_runtime_1.jsx)("div", { className: "bg-white rounded-2xl shadow h-full min-h-96", children: selected === "overview" ? ((0, jsx_runtime_1.jsx)(OverviewContent, {})) : table ? ((0, jsx_runtime_1.jsx)(TableContent, {})) : null }) })] })] }) }));
}
exports.default = Learn;
