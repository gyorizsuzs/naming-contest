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
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("../server/db");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var client, resp;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, db_1.connectClient)()];
                case 1:
                    client = _a.sent();
                    return [4 /*yield*/, client.collection("contests").deleteMany({})];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, client.collection("contests").insertMany([
                            {
                                id: "cognitive-building-bricks",
                                categoryName: "Business/Company",
                                contestName: "Cognitive Building Bricks",
                                description: "\nThis product is a classroom tool that scaffolds higher order thinking. Its a collaborative strategy that using building bricks to help structure students ideas. Learners build knowledge structures with information (attached to different coloured bricks). Students desks are turned into workshops where they physically manipulate information into meaningful creations. They show sequences of information (like stories), rank information by importance and pretty much all other essential cognitive skills you need at school. The end result is clarity in thought and better collaborative conversations. I want this to be marketed as a sophisticated knowledge tool applicable to all ages and subjects. It gives students the cognitive edge, they get a little more 'RAM'!.\n\nI want to continue with the construction/building theme as well as the mind/brain/learning theme. They need to be blended somehow. Teachers find it easier to talk about building/scaffolding analogies as its less abstract.\n      ",
                                names: [
                                    {
                                        id: "mind-assembly",
                                        name: "Mind Assembly",
                                        timestamp: new Date(),
                                    },
                                    {
                                        id: "brain-scaffold",
                                        name: "Brain Scaffold",
                                        timestamp: new Date(),
                                    },
                                ],
                            },
                            {
                                id: "educating-people-about-sustainable-food-production",
                                categoryName: "Magazine/Newsletter",
                                contestName: "Educating people about sustainable food production",
                                description: "\nEducating people about sustainable food production\n      ",
                                names: [],
                            },
                            {
                                id: "big-data-analytics-for-cash-circulation",
                                categoryName: "Software Component",
                                contestName: "Big Data Analytics for Cash Circulation",
                                description: "\nData is created at every touch point in a notes life-cycle. Because of the volume of the data, it can be difficult to store, analyse and gain insight. Collecting, processing and analysing the data using big data technologies and displaying the results in an interactive display makes it easy to make informative decisions, overcome problem and plan for the future.\n\nIt works using big data technologies and displays the results in modern browsers, combining powerful visualisation components and a data-driven approach to interact with the data.\n\nIt enables you to analyse data that were not previously possible. The volume, variety, complexity of the analytical processing involved, and the responsiveness required are now achievable with the product. Gaining smarter decision making but also provide faster time to value.\n    ",
                                names: [
                                    {
                                        id: "cash-view",
                                        name: "Cash View",
                                        timestamp: new Date(),
                                    },
                                    {
                                        id: "currency-map",
                                        name: "Currency Map",
                                        timestamp: new Date(),
                                    },
                                    {
                                        id: "cash-board",
                                        name: "Cash Board",
                                        timestamp: new Date(),
                                    },
                                ],
                            },
                            {
                                id: "free-programming-books",
                                categoryName: "Website",
                                contestName: "Free programming books",
                                description: "\nA list of free online programming books, categorized by languages/topics\n    ",
                                names: [],
                            },
                        ])];
                case 3:
                    resp = _a.sent();
                    console.info("Inserted Contests:", resp.insertedCount);
                    (0, db_1.stopClient)();
                    return [2 /*return*/];
            }
        });
    });
}
main();
//# sourceMappingURL=load-test-data.js.map