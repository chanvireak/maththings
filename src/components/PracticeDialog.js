"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var dialog_1 = require("./ui/dialog");
var button_1 = require("./ui/button");
var PracticeDialog = function (_a) {
    var finished = _a.finished, time = _a.time, formatTime = _a.formatTime, onBackToHome = _a.onBackToHome;
    return ((0, jsx_runtime_1.jsx)(dialog_1.Dialog, { open: finished, onOpenChange: function (open) {
            if (!open) {
                onBackToHome();
            }
        }, children: (0, jsx_runtime_1.jsxs)(dialog_1.DialogContent, { className: "text-center text-bold text-lg text-green-700 drop-shadow max-w-sm mx-auto", children: [(0, jsx_runtime_1.jsxs)(dialog_1.DialogHeader, { children: [(0, jsx_runtime_1.jsx)(dialog_1.DialogTitle, { className: "mb-4 text-center text-bold text-2xl", children: "\uD83C\uDF89 Congratulations! \uD83C\uDF89" }), (0, jsx_runtime_1.jsx)(dialog_1.DialogDescription, { children: (0, jsx_runtime_1.jsxs)("div", { className: "mb-4 text-center text-bold text-4xl text-green-700 drop-shadow", children: ["\u231B Your Time: ", formatTime(time), " \u231B"] }) })] }), (0, jsx_runtime_1.jsx)(dialog_1.DialogFooter, { children: (0, jsx_runtime_1.jsx)(button_1.Button, { className: "mx-auto flex justify-center items-center text-center px-6 py-2 rounded-lg font-bold text-lg shadow transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-yellow-600 hover:bg-yellow-700 text-white", onClick: onBackToHome, children: "Home" }) })] }) }));
};
exports.default = PracticeDialog;
