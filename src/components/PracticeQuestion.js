"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var PracticeQuestion = function (_a) {
    var question = _a.question;
    return ((0, jsx_runtime_1.jsxs)("section", { className: "w-full rounded-2xl shadow-2xl bg-white flex flex-col border border-yellow-100", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-t-2xl text-white px-4 sm:px-6 py-3 sm:py-4 font-extrabold text-lg sm:text-xl text-center tracking-tight shadow", children: "Monster" }), (0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center p-4 sm:p-6 lg:p-8 h-40 sm:h-48 lg:h-56", children: (0, jsx_runtime_1.jsxs)("span", { className: "text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-700 drop-shadow text-center", children: [question.swap ? question.b : question.a, " \u00D7 ", question.swap ? question.a : question.b, " = ?"] }) })] }));
};
exports.default = PracticeQuestion;
