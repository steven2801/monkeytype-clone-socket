import * as numbers from "../data/numbers.json";
import * as words from "../data/words.json";
import * as sentences from "../data/sentences.json";

const _ = require("lodash");

export const shuffleList = (type: string) => {
	switch (type) {
		case "words":
			return _.shuffle(words).slice(0, 30);
		case "numbers":
			return _.shuffle(numbers).slice(0, 20);
		case "sentences":
			// eslint-disable-next-line no-case-declarations
			let sentencesArray = _.shuffle(sentences);
			sentencesArray = sentencesArray.slice(0, 2).join(" ").split(" ");
			return sentencesArray;
		default:
			return _.shuffle(words);
	}
};
