import * as numbers from "../data/numbers.json";
import * as words from "../data/words.json";

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

export const shuffleList = (type: string) => {
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
