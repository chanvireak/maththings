"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var PracticeStats = function (_a) {
    var total = _a.total, maxQuestions = _a.maxQuestions, time = _a.time, formatTime = _a.formatTime;
    return ((0, jsx_runtime_1.jsxs)("section", { className: "w-full rounded-2xl shadow-2xl bg-white flex flex-col border border-yellow-200", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-t-2xl text-white px-4 sm:px-6 py-3 sm:py-4 font-extrabold text-lg sm:text-xl text-center tracking-tight shadow", children: "Stats" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row sm:flex-col items-center sm:items-start justify-around sm:justify-start gap-2 sm:gap-4 p-4 sm:p-6 text-base sm:text-lg h-24 sm:h-32 lg:h-40", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-yellow-700 font-semibold px-2 sm:px-3 py-2 sm:py-3", children: ["Progress: ", (0, jsx_runtime_1.jsxs)("span", { className: "font-bold", children: [total, " / ", maxQuestions] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-yellow-700 font-semibold px-2 sm:px-3 py-2 sm:py-3", children: ["Time: ", (0, jsx_runtime_1.jsx)("span", { className: "font-bold", children: formatTime(time) })] })] })] }));
};
exports.default = PracticeStats;
