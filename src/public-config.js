"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_SERVER_URL = exports.HOST = exports.PORT = void 0;
exports.PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : "8080";
exports.HOST = (_b = process.env.HOST) !== null && _b !== void 0 ? _b : "0.0.0.0";
exports.API_SERVER_URL = "http://".concat(exports.HOST, ":").concat(exports.PORT, "/api");
//# sourceMappingURL=public-config.js.map