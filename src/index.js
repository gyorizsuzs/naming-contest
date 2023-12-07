"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var client_1 = require("react-dom/client");
var app_1 = __importDefault(require("./components/app"));
var container = document.getElementById('app');
var root = (0, client_1.createRoot)(container);
root.render((0, jsx_runtime_1.jsx)(app_1.default, { initialData: window.initialData }));
//# sourceMappingURL=index.js.map