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
var contest_1 = __importDefault(require("./contest"));
var contest_list_1 = __importDefault(require("./contest-list"));
var App = function (_a) {
    var initialData = _a.initialData;
    var _b = __read((0, react_1.useState)(initialData.currentContest ? "contest" : "contestList"), 2), page = _b[0], setPage = _b[1];
    var _c = __read((0, react_1.useState)(initialData.currentContest), 2), currentContest = _c[0], setCurrentContest = _c[1];
    (0, react_1.useEffect)(function () {
        window.onpopstate = function (event) {
            var _a, _b;
            var newPage = ((_a = event.state) === null || _a === void 0 ? void 0 : _a.contestId)
                ? "contest"
                : "contestList";
            setPage(newPage);
            setCurrentContest({ id: (_b = event.state) === null || _b === void 0 ? void 0 : _b.contestId });
        };
    }, []);
    var navigateToContest = function (contestId) {
        window.history.pushState({ contestId: contestId }, "", "/contest/".concat(contestId));
        setPage("contest");
        setCurrentContest({ id: contestId });
    };
    var navigateToContestList = function () {
        window.history.pushState({}, "", "/");
        setPage("contestList");
        setCurrentContest(undefined);
    };
    var pageContent = function () {
        switch (page) {
            case "contestList":
                return ((0, jsx_runtime_1.jsx)(contest_list_1.default, { initialContests: initialData.contests, onContestClick: navigateToContest }));
            case "contest":
                return ((0, jsx_runtime_1.jsx)(contest_1.default, { initialContest: currentContest, onContestListClick: navigateToContestList }));
        }
    };
    return (0, jsx_runtime_1.jsx)("div", { className: "container", children: pageContent() });
};
exports.default = App;
//# sourceMappingURL=app.js.map