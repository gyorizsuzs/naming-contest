"use strict";
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
var contest_item_1 = __importDefault(require("./contest-item"));
var header_1 = __importDefault(require("./header"));
var ContestList = function (_a) {
    var initialContests = _a.initialContests, onContestClick = _a.onContestClick;
    var _b = __read((0, react_1.useState)(initialContests !== null && initialContests !== void 0 ? initialContests : []), 2), contests = _b[0], setContests = _b[1];
    (0, react_1.useEffect)(function () {
        if (!initialContests) {
            (0, api_client_1.fetchContestList)().then(function (contests) {
                setContests(contests);
            });
        }
    }, [initialContests]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(header_1.default, { message: "Naming Contests" }), (0, jsx_runtime_1.jsx)("div", { className: "contest-list", children: contests.map(function (contest) {
                    return ((0, jsx_runtime_1.jsx)(contest_item_1.default, { contest: contest, onClick: onContestClick }, contest.id));
                }) })] }));
};
exports.default = ContestList;
//# sourceMappingURL=contest-list.js.map