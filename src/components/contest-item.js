"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var ContestItem = function (_a) {
    var contest = _a.contest, onClick = _a.onClick;
    var handleClick = function (event) {
        event.preventDefault();
        onClick(contest.id);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "contest-preview link", onClick: handleClick, children: [(0, jsx_runtime_1.jsx)("div", { className: "category", children: contest.categoryName }), (0, jsx_runtime_1.jsx)("div", { className: "contest", children: contest.contestName })] }));
};
exports.default = ContestItem;
//# sourceMappingURL=contest-item.js.map