"use strict";
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var api_client_1 = require("../api-client");
var header_1 = __importDefault(require("./header"));
var Contest = function (_a) {
    var _b;
    var initialContest = _a.initialContest, onContestListClick = _a.onContestListClick;
    var _c = __read((0, react_1.useState)(initialContest), 2), contest = _c[0], setContest = _c[1];
    (0, react_1.useEffect)(function () {
        if (!contest.names) {
            (0, api_client_1.fetchContest)(contest.id).then(function (contest) {
                setContest(contest);
            });
        }
    }, [contest.id, contest.names]);
    var handleClickContestList = function (event) {
        event.preventDefault();
        onContestListClick();
    };
    var handleNewNameSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var newNameInput, updatedContest;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    newNameInput = event.target.newName;
                    return [4 /*yield*/, (0, api_client_1.addNewNameToContest)({
                            contestId: contest.id,
                            newNameValue: newNameInput.value,
                        })];
                case 1:
                    updatedContest = _a.sent();
                    setContest(updatedContest);
                    return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(header_1.default, { message: contest.contestName }), (0, jsx_runtime_1.jsxs)("div", { className: "contest", children: [(0, jsx_runtime_1.jsx)("div", { className: "title", children: "Contest Description" }), (0, jsx_runtime_1.jsx)("div", { className: "description", children: contest.description }), (0, jsx_runtime_1.jsx)("div", { className: "title", children: "Proposed Names" }), (0, jsx_runtime_1.jsx)("div", { className: "body", children: ((_b = contest.names) === null || _b === void 0 ? void 0 : _b.length) > 0 ? ((0, jsx_runtime_1.jsx)("div", { className: "list", children: contest.names.map(function (proposedName) { return ((0, jsx_runtime_1.jsx)("div", { className: "item", children: proposedName.name }, proposedName.id)); }) })) : ((0, jsx_runtime_1.jsx)("div", { children: "No names proposed yet" })) }), (0, jsx_runtime_1.jsx)("div", { className: "title", children: "Propose a New Name" }), (0, jsx_runtime_1.jsx)("div", { className: "body", children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleNewNameSubmit, children: [(0, jsx_runtime_1.jsx)("input", { type: "text", name: "newName", placeholder: "New Name Here.." }), (0, jsx_runtime_1.jsx)("button", { type: "submit", children: "Submit" })] }) }), (0, jsx_runtime_1.jsx)("a", { href: "/", className: "link", onClick: handleClickContestList, children: "Contest List" })] })] }));
};
exports.default = Contest;
//# sourceMappingURL=contest.js.map