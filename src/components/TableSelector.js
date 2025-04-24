"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var presets = [
    { label: 'Beginner', tables: [1, 2] },
    { label: 'Intermediate', tables: Array.from({ length: 5 }, function (_, i) { return i + 1; }) },
    { label: 'Advanced', tables: Array.from({ length: 12 }, function (_, i) { return i + 1; }) }
];
function TableSelector() {
    var _a = (0, react_1.useState)([]), selectedTables = _a[0], setSelectedTables = _a[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var toggleTable = function (n) {
        setSelectedTables(function (prev) {
            return prev.includes(n) ? prev.filter(function (x) { return x !== n; }) : __spreadArray(__spreadArray([], prev, true), [n], false);
        });
    };
    var applyPreset = function (tables) {
        setSelectedTables(tables);
    };
    var startPractice = function () {
        navigate('/practice', { state: { tables: selectedTables } });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "w-full flex flex-col items-center", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold mb-4 text-yellow-700", children: "Pick Spell Card/Wizardry Level" }), (0, jsx_runtime_1.jsx)("div", { className: "flex flex-wrap justify-center gap-2 mb-6", children: presets.map(function (p) { return ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return applyPreset(p.tables); }, className: "mt-2 px-6 py-2 rounded-lg font-bold text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-600 hover:bg-yellow-700 text-white", children: p.label }, p.label)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-6 gap-3 mb-6", children: Array.from({ length: 12 }, function (_, i) { return i + 1; }).map(function (n) { return ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return toggleTable(n); }, className: "w-12 h-12 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 ".concat(selectedTables.includes(n)
                        ? 'bg-yellow-600 border-yellow-300 text-white shadow-lg'
                        : 'bg-white border-yellow-400 text-yellow-600 hover:bg-yellow-50'), children: n }, n)); }) }), (0, jsx_runtime_1.jsx)("button", { onClick: startPractice, disabled: selectedTables.length === 0, className: "mt-2 px-6 py-2 rounded-lg font-bold text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 ".concat(selectedTables.length === 0
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-yellow-600 hover:bg-yellow-700 text-white'), children: "Start the Quest" })] }));
}
exports.default = TableSelector;
