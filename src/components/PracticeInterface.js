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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var canvas_confetti_1 = require("canvas-confetti");
var PracticeQuestion_1 = require("./PracticeQuestion");
var PracticeAnswer_1 = require("./PracticeAnswer");
var PracticeStats_1 = require("./PracticeStats");
var PracticeDialog_1 = require("./PracticeDialog");
// Dynamically load hint markdown files
var hintModules = import.meta.glob("../trick-doc/*.md", { query: "?raw", import: "default" });
function PracticeInterface() {
    var _this = this;
    var location = (0, react_router_dom_1.useLocation)();
    var navigate = (0, react_router_dom_1.useNavigate)();
    var tables = (0, react_1.useMemo)(function () { var _a; return ((_a = location.state) === null || _a === void 0 ? void 0 : _a.tables) || []; }, [location.state]);
    // Generate questions only once when component mounts or tables change
    var _a = (0, react_1.useState)([]), questions = _a[0], setQuestions = _a[1];
    var _b = (0, react_1.useState)(true), isLoading = _b[0], setIsLoading = _b[1];
    // Initialize questions only when component mounts
    (0, react_1.useEffect)(function () {
        if (tables.length === 0) {
            navigate('/');
            return;
        }
        // Generate and shuffle questions
        var generateQuestions = function () {
            var _a;
            var combos = tables.flatMap(function (a) {
                return Array.from({ length: 12 }, function (_, i) { return ({ a: a, b: i + 1, swap: Math.random() < 0.5 }); });
            });
            // Shuffle using a more efficient algorithm
            var shuffled = __spreadArray([], combos, true);
            for (var i = shuffled.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                _a = [shuffled[j], shuffled[i]], shuffled[i] = _a[0], shuffled[j] = _a[1];
            }
            return shuffled;
        };
        // Use setTimeout to prevent UI blocking during question generation
        setTimeout(function () {
            var generatedQuestions = generateQuestions();
            setQuestions(generatedQuestions);
            setIsLoading(false);
        }, 0);
    }, [tables, navigate]);
    var maxQuestions = questions.length;
    var _c = (0, react_1.useState)(0), currentIndex = _c[0], setCurrentIndex = _c[1];
    var question = questions[currentIndex] || { a: 1, b: 1, swap: false };
    var _d = (0, react_1.useState)(false), finished = _d[0], setFinished = _d[1];
    var _e = (0, react_1.useState)(''), hint = _e[0], setHint = _e[1];
    var _f = (0, react_1.useState)(''), lastWrong = _f[0], setLastWrong = _f[1];
    var _g = (0, react_1.useState)(''), input = _g[0], setInput = _g[1];
    var _h = (0, react_1.useState)(''), feedback = _h[0], setFeedback = _h[1];
    var _j = (0, react_1.useState)(0), total = _j[0], setTotal = _j[1];
    var _k = (0, react_1.useState)(0), correct = _k[0], setCorrect = _k[1];
    var _l = (0, react_1.useState)(0), time = _l[0], setTime = _l[1];
    // Lazy-load hints only when needed
    var _m = (0, react_1.useState)({}), mdHints = _m[0], setMdHints = _m[1];
    // Audio references
    var audioRef = (0, react_1.useRef)(new Audio('sound/woo-hoo-82843.mp3'));
    var correctAudioRef = (0, react_1.useRef)(new Audio('sound/correct-choice-43861.mp3'));
    var incorrectAudioRef = (0, react_1.useRef)(new Audio('sound/wrong-47985.mp3'));
    // Preload audio to avoid delays when playing
    (0, react_1.useEffect)(function () {
        [audioRef, correctAudioRef, incorrectAudioRef].forEach(function (ref) {
            ref.current.load();
        });
    }, []);
    // Load hint only when needed
    var loadHint = (0, react_1.useCallback)(function (key) { return __awaiter(_this, void 0, void 0, function () {
        var hintPath, raw, newHints, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    // If hint is already loaded, use it
                    if (mdHints[key])
                        return [2 /*return*/, mdHints[key]];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, , 5]);
                    hintPath = Object.keys(hintModules).find(function (path) { return path.includes("/".concat(key, ".md")); });
                    if (!hintPath) return [3 /*break*/, 3];
                    return [4 /*yield*/, hintModules[hintPath]()];
                case 2:
                    raw = _b.sent();
                    newHints = __assign(__assign({}, mdHints), (_a = {}, _a[key] = raw, _a));
                    setMdHints(newHints);
                    return [2 /*return*/, raw];
                case 3: return [3 /*break*/, 5];
                case 4:
                    error_1 = _b.sent();
                    console.error("Error loading hint:", error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/, null];
            }
        });
    }); }, [mdHints]);
    // Show confetti on completion
    (0, react_1.useEffect)(function () {
        if (finished) {
            (0, canvas_confetti_1.default)({ particleCount: 200, spread: 70, origin: { y: 0.6 } });
            audioRef.current.play().catch(function (e) { return console.log("Audio play error:", e); });
        }
    }, [finished]);
    // Timer effect
    (0, react_1.useEffect)(function () {
        if (!finished && !isLoading) {
            var timer_1 = setInterval(function () { return setTime(function (t) { return t + 1; }); }, 1000);
            return function () { return clearInterval(timer_1); };
        }
    }, [finished, isLoading]);
    var handleSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var answerInt, correctAnswer, newTotal, newCorrect, key, raw, magicRuleMatch, magicRule, hintText;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    answerInt = parseInt(input, 10);
                    if (isNaN(answerInt))
                        return [2 /*return*/];
                    correctAnswer = question.a * question.b;
                    if (!(answerInt === correctAnswer)) return [3 /*break*/, 1];
                    correctAudioRef.current.play().catch(function (e) { return console.log("Audio play error:", e); });
                    setFeedback('correct');
                    setLastWrong('');
                    setHint('');
                    newTotal = total + 1;
                    newCorrect = correct + 1;
                    setTotal(newTotal);
                    setCorrect(newCorrect);
                    if (newTotal < maxQuestions) {
                        // Delay moving to next question to show feedback
                        setTimeout(function () {
                            setCurrentIndex(function (i) { return i + 1; });
                            setFeedback('');
                            setInput('');
                        }, 500);
                    }
                    else {
                        setFinished(true);
                    }
                    return [3 /*break*/, 3];
                case 1:
                    incorrectAudioRef.current.play().catch(function (e) { return console.log("Audio play error:", e); });
                    setLastWrong(input);
                    setFeedback('incorrect');
                    setInput('');
                    // Load hint on demand
                    setHint('Loading hint...');
                    key = String(Math.min(question.a, question.b));
                    return [4 /*yield*/, loadHint(key)];
                case 2:
                    raw = _a.sent();
                    if (raw) {
                        magicRuleMatch = raw.match(/##+\s*Hint\s*\n([\s\S]*?)(?=\n##)/i);
                        magicRule = magicRuleMatch ? magicRuleMatch[1].replace(/\*/g, '').trim() : '';
                        hintText = "Hint: ".concat(magicRule);
                        // if (examples) hintText += `\n${examples}`;
                        setHint(hintText);
                    }
                    else {
                        setHint('No hint available for this question.');
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var formatTime = function (seconds) {
        var m = Math.floor(seconds / 60);
        var s = seconds % 60;
        return "".concat(m, ":").concat(s.toString().padStart(2, '0'));
    };
    // Show loading state
    if (isLoading) {
        return ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center justify-center h-screen", children: (0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [(0, jsx_runtime_1.jsx)("div", { className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-lg", children: "Preparing your practice questions..." })] }) }));
    }
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col", children: [(0, jsx_runtime_1.jsx)(PracticeDialog_1.default, { finished: finished, correct: correct, maxQuestions: maxQuestions, time: time, formatTime: formatTime, onBackToHome: function () { return navigate('/'); } }), (0, jsx_runtime_1.jsx)("main", { className: "flex-1 flex items-start justify-center py-4 px-2 sm:py-8 sm:px-4", children: (0, jsx_runtime_1.jsx)("div", { className: "w-full max-w-7xl mx-auto", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full lg:w-[600px] flex flex-col gap-4 sm:gap-6 order-2 lg:order-1", children: [(0, jsx_runtime_1.jsx)("div", { className: "order-1 lg:order-2", children: (0, jsx_runtime_1.jsx)(PracticeStats_1.default, { total: total, maxQuestions: maxQuestions, time: time, formatTime: formatTime }) }), (0, jsx_runtime_1.jsx)("div", { className: "order-2 lg:order-1", children: (0, jsx_runtime_1.jsx)(PracticeQuestion_1.default, { question: question }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "w-full lg:w-[600px] order-3 lg:order-2", children: (0, jsx_runtime_1.jsx)(PracticeAnswer_1.default, { input: input, setInput: setInput, handleSubmit: handleSubmit, feedback: feedback, lastWrong: lastWrong, hint: hint }) })] }) }) })] }));
}
exports.default = PracticeInterface;
