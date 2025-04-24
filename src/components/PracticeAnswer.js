"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var React = require("react");
var button_1 = require("./ui/button");
var PracticeAnswer = function (_a) {
    var input = _a.input, setInput = _a.setInput, handleSubmit = _a.handleSubmit, feedback = _a.feedback, lastWrong = _a.lastWrong, hint = _a.hint;
    var _b = React.useState(false), overflow = _b[0], setOverflow = _b[1];
    var _c = React.useState(""), lastOverflow = _c[0], setLastOverflow = _c[1];
    return ((0, jsx_runtime_1.jsxs)("section", { className: "w-full h-full rounded-2xl shadow-2xl bg-white flex flex-col border border-yellow-100", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 rounded-t-2xl text-white px-4 sm:px-6 py-3 sm:py-4 font-extrabold text-lg sm:text-xl text-center tracking-tight shadow", children: "Cast Your Spell" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 flex flex-col items-center justify-between p-4 sm:p-6 lg:p-8 lg:h-[calc(224px+32px+160px)]", children: [(0, jsx_runtime_1.jsx)("div", { className: "h-32 sm:h-36 lg:h-56 flex flex-col items-center justify-center mb-4 text-center overflow-y-auto", children: overflow ? ((0, jsx_runtime_1.jsxs)("div", { className: "text-yellow-700", children: [(0, jsx_runtime_1.jsxs)("p", { className: "text-2xl sm:text-3xl lg:text-4xl text-red-700 font-bold mb-2", children: [lastOverflow, "?"] }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm sm:text-base italic mb-2", children: "That's beyond our magic scroll!" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm sm:text-base text-muted-foreground mb-2", children: "Hint: Only spells up to 144 exist in the Land of MathThings!" })] })) : feedback === 'correct' ? ((0, jsx_runtime_1.jsx)("div", { className: "text-green-600 font-bold text-2xl sm:text-3xl lg:text-4xl", children: "\uD83C\uDF89 Correct! \uD83C\uDF89" })) : feedback === 'incorrect' ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-yellow-700", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-2xl sm:text-3xl lg:text-4xl text-red-700 font-bold mb-2", children: "Oops!" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm sm:text-base italic mb-2", children: [lastWrong, " was not a correct spell."] })] }), (0, jsx_runtime_1.jsx)("div", { className: "text-xs sm:text-sm mt-2 whitespace-pre-line text-muted-foreground", children: hint })] })) : null }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "w-full max-w-xs flex flex-col items-center gap-3 sm:gap-4", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", inputMode: "numeric", pattern: "[0-9]*", value: input, onChange: function (e) {
                                    var raw = e.target.value.replace(/\D/g, "");
                                    if (Number(raw) > 144) {
                                        setOverflow(true);
                                        setLastOverflow(raw);
                                        setInput("");
                                    }
                                    else {
                                        setOverflow(false);
                                        setInput(raw);
                                    }
                                }, autoFocus: true, className: "w-24 sm:w-32 h-20 sm:h-24 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-yellow-700 text-center border-2 border-gray-300 rounded-lg appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [appearance:textfield]" }), (0, jsx_runtime_1.jsx)(button_1.Button, { type: "submit", className: "mt-1 sm:mt-2 px-4 sm:px-6 py-2 rounded-lg font-bold text-base sm:text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-600 hover:bg-yellow-700 text-white", children: "Cast Spell" })] })] })] }));
};
exports.default = PracticeAnswer;
