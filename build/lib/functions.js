"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.shuffleList = void 0;
const numbers = __importStar(require("../data/numbers.json"));
const words = __importStar(require("../data/words.json"));
const sentences = [
    "Sarah and Ira drove to the store.",
    "The ham, green beans, mashed potatoes, and corn are gluten-free.",
    "My mother hemmed and hawed over where to go for dinner.",
    "The mangy, scrawny stray dog hurriedly gobbled down the grain-free, organic dog food.",
    "I quickly put on my red winter jacket, black snow pants, waterproof boots, homemade mittens, and handknit scarf.",
    "The incessant ticking and chiming echoed off the weathered walls of the clock repair shop.",
    "Nervously, I unfolded the wrinkled and stained letter from my long-dead ancestor.",
    "Into the suitcase, I carelessly threw a pair of ripped jeans, my favorite sweater from high school, an old pair of tube socks with stripes, and $20,000 in cash.",
];
const _ = require("lodash");
const shuffleList = (type) => {
    switch (type) {
        case "words":
            return _.shuffle(words).slice(0, 30);
        case "numbers":
            return _.shuffle(numbers).slice(0, 20);
        case "sentences":
            let sentencesArray = _.shuffle(sentences);
            sentencesArray = sentencesArray.slice(0, 2);
            return sentencesArray;
        default:
            return _.shuffle(words);
    }
};
exports.shuffleList = shuffleList;
