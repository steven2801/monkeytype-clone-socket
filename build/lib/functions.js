"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shuffleList = void 0;
const numbers = [
    "6793164",
    "06473",
    "9034251",
    "929832",
    "73148",
    "640828",
    "53851",
    "96180296",
    "42176082",
    "17297527",
    "6434876",
    "67803208",
    "7404072",
    "416828",
    "34170",
    "34746",
    "860346",
    "487828",
    "0653705",
    "2825173",
    "569179",
    "720537",
    "97079",
    "86809",
    "82498",
    "3896258",
    "7364346",
    "1416031",
    "25483",
    "848494",
    "7952807",
    "7871742",
    "64189534",
    "3575421",
    "59343",
    "679435",
    "47372",
    "24284",
    "386183",
    "6594325",
    "53852",
    "97547",
    "21781",
    "1875646",
    "4146286",
    "80470",
    "62670609",
    "52182857",
    "7546070",
    "5125683",
    "17451916",
    "32808515",
    "26260",
    "54567",
    "5354230",
    "5363587",
    "348478",
    "37982142",
    "51903848",
    "15207",
    "2073945",
    "4164275",
    "267630",
    "80265",
    "27261206",
    "26271",
    "521318",
    "532918",
    "124725",
    "604658",
    "464268",
    "79642702",
    "18939",
    "781325",
    "31870245",
    "31863215",
    "3434218",
    "9147936",
    "321268",
    "023656",
    "7630543",
    "54927",
    "15754965",
    "5736275",
    "981921",
    "5416728",
    "7516241",
    "9357918",
    "241726",
    "7268491",
    "072097",
    "43723",
    "5347823",
    "6213425",
    "54164317",
    "916272",
    "9408172",
    "29170",
    "129523",
    "63456",
    "5848528",
    "1919714",
    "947672",
    "76373",
    "276247",
    "4819856",
    "684757",
    "74156963",
    "04756",
    "1575232",
    "6485451",
    "68107350",
    "18387",
    "0583947",
    "83875645",
    "13164261",
    "171283",
    "31769",
    "89427646",
    "78639492",
    "87216",
    "2175938",
    "752365",
    "48464",
    "75396",
    "2502313",
    "94652852",
    "848427",
    "43164365",
    "51731",
    "04174",
    "84784",
    "28626",
    "197976",
    "8527548",
    "42743968",
    "518547",
    "175430",
    "9527230",
    "6462729",
    "172759",
    "1265478",
    "3043153",
    "14573",
    "8382082",
    "73075",
    "46725",
    "13716",
    "47136",
    "821653",
    "7938640",
    "62747",
    "2782170",
    "2468740",
    "8257138",
    "26836",
    "45737",
    "68351787",
    "75423",
    "3876974",
    "0910523",
    "9313036",
    "201540",
    "58613585",
    "62601737",
    "98738",
    "41321",
    "127567",
    "73617",
    "182151",
    "16510",
    "765702",
    "5614503",
    "1636079",
    "1976064",
    "17254272",
    "5489343",
    "040356",
    "564312",
    "64272684",
    "71786512",
    "502741",
    "56181",
    "3275759",
    "89358",
    "85364395",
    "3915128",
    "7546140",
    "46483547",
    "59642",
    "19724937",
    "1582340",
    "457256",
    "1235404",
    "84626",
    "1585306",
    "47947",
    "31323",
    "20454",
    "6727820",
    "321058",
    "6865437",
    "53541",
    "319374",
    "5708061",
    "1954978",
    "457414",
    "478751",
    "457517",
    "743198",
    "567641",
    "348153",
    "59543606",
    "1304371",
    "5073726",
    "87518173",
    "0741783",
    "72421",
    "673471",
    "273837",
    "476860",
    "9725121",
    "64582",
    "49280",
    "1352525",
    "3512641",
    "81671",
    "67284",
    "83475",
    "780873",
    "516405",
    "06382",
    "935273",
    "32767645",
    "2156367",
    "84567350",
    "826183",
    "26192",
    "3518545",
    "25829",
    "4379216",
    "5057838",
    "46472",
    "519282",
    "41451589",
    "21412374",
    "72762686",
    "16825",
    "24715",
    "46531",
    "561371",
    "7393075",
    "54095232",
    "6715729",
    "57678",
    "357474",
    "18265",
    "31495897",
    "675061",
    "237587",
    "42632",
    "124712",
    "453032",
    "75245473",
    "040270",
    "69458431",
    "41576",
    "517471",
    "610631",
    "29715",
    "879872",
    "72712",
    "96875",
    "417686",
    "7376253",
    "578484",
    "6327084",
    "42526",
    "27696",
    "6062375",
    "89782",
    "58173",
    "21091",
    "8632731",
    "92531",
    "40179",
    "2313156",
    "26235",
    "834084",
    "49281",
    "5621967",
    "3475103",
    "152727",
    "726063",
    "30254",
    "36787968",
    "56519",
    "3816451",
    "72567173",
];
const words = [
    "a",
    "able",
    "about",
    "absolute",
    "accept",
    "account",
    "achieve",
    "across",
    "act",
    "active",
    "actual",
    "add",
    "address",
    "admit",
    "advertise",
    "affect",
    "afford",
    "after",
    "afternoon",
    "again",
    "against",
    "age",
    "agent",
    "ago",
    "agree",
    "air",
    "all",
    "allow",
    "almost",
    "along",
    "already",
    "alright",
    "also",
    "although",
    "always",
    "america",
    "amount",
    "and",
    "another",
    "answer",
    "any",
    "apart",
    "apparent",
    "appear",
    "apply",
    "appoint",
    "approach",
    "appropriate",
    "area",
    "argue",
    "arm",
    "around",
    "arrange",
    "art",
    "as",
    "ask",
    "associate",
    "assume",
    "at",
    "attend",
    "authority",
    "available",
    "aware",
    "away",
    "awful",
    "baby",
    "back",
    "bad",
    "bag",
    "balance",
    "ball",
    "bank",
    "bar",
    "base",
    "basis",
    "be",
    "bear",
    "beat",
    "beauty",
    "because",
    "become",
    "bed",
    "before",
    "begin",
    "behind",
    "believe",
    "benefit",
    "best",
    "bet",
    "between",
    "big",
    "bill",
    "birth",
    "bit",
    "black",
    "bloke",
    "blood",
    "blow",
    "blue",
    "board",
    "boat",
    "body",
    "book",
    "both",
    "bother",
    "bottle",
    "bottom",
    "box",
    "boy",
    "break",
    "brief",
    "brilliant",
    "bring",
    "britain",
    "brother",
    "budget",
    "build",
    "bus",
    "business",
    "busy",
    "but",
    "buy",
    "by",
    "cake",
    "call",
    "can",
    "car",
    "card",
    "care",
    "carry",
    "case",
    "cat",
    "catch",
    "cause",
    "cent",
    "centre",
    "certain",
    "chair",
    "chairman",
    "chance",
    "change",
    "chap",
    "character",
    "charge",
    "cheap",
    "check",
    "child",
    "choice",
    "choose",
    "Christ",
    "Christmas",
    "church",
    "city",
    "claim",
    "class",
    "clean",
    "clear",
    "client",
    "clock",
    "close",
    "closes",
    "clothe",
    "club",
    "coffee",
    "cold",
    "colleague",
    "collect",
    "college",
    "colour",
    "come",
    "comment",
    "commit",
    "committee",
    "common",
    "community",
    "company",
    "compare",
    "complete",
    "compute",
    "concern",
    "condition",
    "confer",
    "consider",
    "consult",
    "contact",
    "continue",
    "contract",
    "control",
    "converse",
    "cook",
    "copy",
    "corner",
    "correct",
    "cost",
    "could",
    "council",
    "count",
    "country",
    "county",
    "couple",
    "course",
    "court",
    "cover",
    "create",
    "cross",
    "cup",
    "current",
    "cut",
    "dad",
    "danger",
    "date",
    "day",
    "dead",
    "deal",
    "dear",
    "debate",
    "decide",
    "decision",
    "deep",
    "definite",
    "degree",
    "department",
    "depend",
    "describe",
    "design",
    "detail",
    "develop",
    "die",
    "difference",
    "difficult",
    "dinner",
    "direct",
    "discuss",
    "district",
    "divide",
    "do",
    "doctor",
    "document",
    "dog",
    "door",
    "double",
    "doubt",
    "down",
    "draw",
    "dress",
    "drink",
    "drive",
    "drop",
    "dry",
    "due",
    "during",
    "each",
    "early",
    "east",
    "easy",
    "eat",
    "economy",
    "educate",
    "effect",
    "egg",
    "eight",
    "either",
    "elect",
    "electric",
    "eleven",
    "else",
    "employ",
    "encourage",
    "end",
    "engine",
    "english",
    "enjoy",
    "enough",
    "enter",
    "environment",
    "equal",
    "especial",
    "europe",
    "even",
    "evening",
    "ever",
    "every",
    "evidence",
    "exact",
    "example",
    "except",
    "excuse",
    "exercise",
    "exist",
    "expect",
    "expense",
    "experience",
    "explain",
    "express",
    "extra",
    "eye",
    "face",
    "fact",
    "fair",
    "fall",
    "family",
    "far",
    "farm",
    "fast",
    "father",
    "favour",
    "feed",
    "feel",
    "few",
    "field",
    "fight",
    "figure",
    "file",
    "fill",
    "film",
    "final",
    "finance",
    "find",
    "fine",
    "finish",
    "fire",
    "first",
    "fish",
    "fit",
    "five",
    "flat",
    "floor",
    "fly",
    "follow",
    "food",
    "foot",
    "for",
    "force",
    "forget",
    "form",
    "fortune",
    "forward",
    "four",
    "france",
    "free",
    "friday",
    "friend",
    "from",
    "front",
    "full",
    "fun",
    "function",
    "fund",
    "further",
    "future",
    "game",
    "garden",
    "gas",
    "general",
    "germany",
    "get",
    "girl",
    "give",
    "glass",
    "go",
    "god",
    "good",
    "goodbye",
    "govern",
    "grand",
    "grant",
    "great",
    "green",
    "ground",
    "group",
    "grow",
    "guess",
    "guy",
    "hair",
    "half",
    "hall",
    "hand",
    "hang",
    "happen",
    "happy",
    "hard",
    "hate",
    "have",
    "he",
    "head",
    "health",
    "hear",
    "heart",
    "heat",
    "heavy",
    "hell",
    "help",
    "here",
    "high",
    "history",
    "hit",
    "hold",
    "holiday",
    "home",
    "honest",
    "hope",
    "horse",
    "hospital",
    "hot",
    "hour",
    "house",
    "how",
    "however",
    "hullo",
    "hundred",
    "husband",
    "idea",
    "identify",
    "if",
    "imagine",
    "important",
    "improve",
    "in",
    "include",
    "income",
    "increase",
    "indeed",
    "individual",
    "industry",
    "inform",
    "inside",
    "instead",
    "insure",
    "interest",
    "into",
    "introduce",
    "invest",
    "involve",
    "issue",
    "it",
    "item",
    "jesus",
    "job",
    "join",
    "judge",
    "jump",
    "just",
    "keep",
    "key",
    "kid",
    "kill",
    "kind",
    "king",
    "kitchen",
    "knock",
    "know",
    "labour",
    "lad",
    "lady",
    "land",
    "language",
    "large",
    "last",
    "late",
    "laugh",
    "law",
    "lay",
    "lead",
    "learn",
    "leave",
    "left",
    "leg",
    "less",
    "let",
    "letter",
    "level",
    "lie",
    "life",
    "light",
    "like",
    "likely",
    "limit",
    "line",
    "link",
    "list",
    "listen",
    "little",
    "live",
    "load",
    "local",
    "lock",
    "london",
    "long",
    "look",
    "lord",
    "lose",
    "lot",
    "love",
    "low",
    "luck",
    "lunch",
    "machine",
    "main",
    "major",
    "make",
    "man",
    "manage",
    "many",
    "mark",
    "market",
    "marry",
    "match",
    "matter",
    "may",
    "maybe",
    "mean",
    "meaning",
    "measure",
    "meet",
    "member",
    "mention",
    "middle",
    "might",
    "mile",
    "milk",
    "million",
    "mind",
    "minister",
    "minus",
    "minute",
    "miss",
    "mister",
    "moment",
    "monday",
    "money",
    "month",
    "more",
    "morning",
    "most",
    "mother",
    "motion",
    "move",
    "mrs",
    "much",
    "music",
    "must",
    "name",
    "nation",
    "nature",
    "near",
    "necessary",
    "need",
    "never",
    "new",
    "news",
    "next",
    "nice",
    "night",
    "nine",
    "no",
    "non",
    "none",
    "normal",
    "north",
    "not",
    "note",
    "notice",
    "now",
    "number",
    "obvious",
    "occasion",
    "odd",
    "of",
    "off",
    "offer",
    "office",
    "often",
    "okay",
    "old",
    "on",
    "once",
    "one",
    "only",
    "open",
    "operate",
    "opportunity",
    "oppose",
    "or",
    "order",
    "organize",
    "original",
    "other",
    "otherwise",
    "ought",
    "out",
    "over",
    "own",
    "pack",
    "page",
    "paint",
    "pair",
    "paper",
    "paragraph",
    "pardon",
    "parent",
    "park",
    "part",
    "particular",
    "party",
    "pass",
    "past",
    "pay",
    "pence",
    "pension",
    "people",
    "per",
    "percent",
    "perfect",
    "perhaps",
    "period",
    "person",
    "photograph",
    "pick",
    "picture",
    "piece",
    "place",
    "plan",
    "play",
    "please",
    "plus",
    "point",
    "police",
    "policy",
    "politic",
    "poor",
    "position",
    "positive",
    "possible",
    "post",
    "pound",
    "power",
    "practise",
    "prepare",
    "present",
    "press",
    "pressure",
    "presume",
    "pretty",
    "previous",
    "price",
    "print",
    "private",
    "probable",
    "problem",
    "proceed",
    "process",
    "produce",
    "product",
    "programme",
    "project",
    "proper",
    "propose",
    "protect",
    "provide",
    "public",
    "pull",
    "purpose",
    "push",
    "put",
    "quality",
    "quarter",
    "question",
    "quick",
    "quid",
    "quiet",
    "quite",
    "radio",
    "rail",
    "raise",
    "range",
    "rate",
    "rather",
    "read",
    "ready",
    "real",
    "realise",
    "really",
    "reason",
    "receive",
    "recent",
    "reckon",
    "recognize",
    "recommend",
    "record",
    "red",
    "reduce",
    "refer",
    "regard",
    "region",
    "relation",
    "remember",
    "report",
    "represent",
    "require",
    "research",
    "resource",
    "respect",
    "responsible",
    "rest",
    "result",
    "return",
    "rid",
    "right",
    "ring",
    "rise",
    "road",
    "role",
    "roll",
    "room",
    "round",
    "rule",
    "run",
    "safe",
    "sale",
    "same",
    "saturday",
    "save",
    "say",
    "scheme",
    "school",
    "science",
    "score",
    "scotland",
    "seat",
    "second",
    "secretary",
    "section",
    "secure",
    "see",
    "seem",
    "self",
    "sell",
    "send",
    "sense",
    "separate",
    "serious",
    "serve",
    "service",
    "set",
    "settle",
    "seven",
    "sex",
    "shall",
    "share",
    "she",
    "sheet",
    "shoe",
    "shoot",
    "shop",
    "short",
    "should",
    "show",
    "shut",
    "sick",
    "side",
    "sign",
    "similar",
    "simple",
    "since",
    "sing",
    "single",
    "sir",
    "sister",
    "sit",
    "site",
    "situate",
    "six",
    "size",
    "sleep",
    "slight",
    "slow",
    "small",
    "smoke",
    "so",
    "social",
    "society",
    "some",
    "son",
    "soon",
    "sorry",
    "sort",
    "sound",
    "south",
    "space",
    "speak",
    "special",
    "specific",
    "speed",
    "spell",
    "spend",
    "square",
    "staff",
    "stage",
    "stairs",
    "stand",
    "standard",
    "start",
    "state",
    "station",
    "stay",
    "step",
    "stick",
    "still",
    "stop",
    "story",
    "straight",
    "strategy",
    "street",
    "strike",
    "strong",
    "structure",
    "student",
    "study",
    "stuff",
    "stupid",
    "subject",
    "succeed",
    "such",
    "sudden",
    "suggest",
    "suit",
    "summer",
    "sun",
    "sunday",
    "supply",
    "support",
    "suppose",
    "sure",
    "surprise",
    "switch",
    "system",
    "table",
    "take",
    "talk",
    "tape",
    "tax",
    "tea",
    "teach",
    "team",
    "telephone",
    "television",
    "tell",
    "ten",
    "tend",
    "term",
    "terrible",
    "test",
    "than",
    "thank",
    "the",
    "then",
    "there",
    "therefore",
    "they",
    "thing",
    "think",
    "thirteen",
    "thirty",
    "this",
    "thou",
    "though",
    "thousand",
    "three",
    "through",
    "throw",
    "thursday",
    "tie",
    "time",
    "to",
    "today",
    "together",
    "tomorrow",
    "tonight",
    "too",
    "top",
    "total",
    "touch",
    "toward",
    "town",
    "trade",
    "traffic",
    "train",
    "transport",
    "travel",
    "treat",
    "tree",
    "trouble",
    "true",
    "trust",
    "try",
    "tuesday",
    "turn",
    "twelve",
    "twenty",
    "two",
    "type",
    "under",
    "understand",
    "union",
    "unit",
    "unite",
    "university",
    "unless",
    "until",
    "up",
    "upon",
    "use",
    "usual",
    "value",
    "various",
    "very",
    "video",
    "view",
    "village",
    "visit",
    "vote",
    "wage",
    "wait",
    "walk",
    "wall",
    "want",
    "war",
    "warm",
    "wash",
    "waste",
    "watch",
    "water",
    "way",
    "we",
    "wear",
    "wednesday",
    "wee",
    "week",
    "weigh",
    "welcome",
    "well",
    "west",
    "what",
    "when",
    "where",
    "whether",
    "which",
    "while",
    "white",
    "who",
    "whole",
    "why",
    "wide",
    "wife",
    "will",
    "win",
    "wind",
    "window",
    "wish",
    "with",
    "within",
    "without",
    "woman",
    "wonder",
    "wood",
    "word",
    "work",
    "world",
    "worry",
    "worse",
    "worth",
    "would",
    "write",
    "wrong",
    "year",
    "yes",
    "yesterday",
    "yet",
    "you",
    "young",
];
const sentences = [
    "She had some amazing news to share but nobody to share it with.",
    "The crowd yells and screams for more memes.",
    "She found his complete dullness interesting.",
    "The newly planted trees were held up by wooden frames in hopes they could survive the next storm.",
    "You can't compare apples and oranges, but what about bananas and plantains?",
    "He swore he just saw his sushi move.",
    "He found the chocolate covered roaches quite tasty.",
    "You have every right to be angry, but that doesn't give you the right to be mean.",
    "The delicious smell came from the array of food at the buffet.",
    "Brady met her gaze again, taking in the array of emotions crossing her features.",
    "The array of vegetables at the flea market fascinated Wren.",
    "If you go to the library, you will find books on an array of subjects.",
    "It was thought advisable for me to have my examinations in a room by myself, because the noise of the typewriter might disturb the other girls.",
    "I had made many mistakes, and Miss Sullivan had pointed them out again and again with gentle patience.",
    "Think how much worse you'd feel if the town you visualized really existed.",
    "It was always dangerous to drive with him since he insisted the safety cones were a slalom course.",
    "The blue parrot drove by the hitchhiking mongoose.",
    "If my calculator had a history, it would be more embarrassing than my browser history.",
    "All she wanted was the answer, but she had no idea how much she would hate it.",
    "In that instant, everything changed.",
    "He learned the important lesson that a picnic at the beach on a windy day is a bad idea.",
    "Potato wedges probably are not best for relationships.",
    "People who insist on picking their teeth with their elbows are so annoying!",
    "Whenever he saw a red flag warning at the beach he grabbed his surfboard.",
    "Various sea birds are elegant, but nothing is as elegant as a gliding pelican.",
    "The waves were crashing on the shore; it was a lovely sight.",
    "When she didn't like a guy who was trying to pick her up, she started using sign language.",
    "The hand sanitizer was actually clear glue.",
    "Jeanne wished she has chosen the red button.",
    "The river stole the gods.",
    "Greetings from the galaxy MACS0647-JD, or what we call home.",
    "Tuesdays are free if you bring a gnome costume.",
    "Car safety systems have come a long way, but he was out to prove they could be outsmarted.",
    "Thigh-high in the water, the fisherman’s hope for dinner soon turned to despair.",
    "His confidence would have bee admirable if it wasn't for his stupidity.",
    "Some bathing suits just shouldn’t be worn by some people.",
    "They got there early, and they got really good seats.",
    "He had unknowingly taken up sleepwalking as a nighttime hobby.",
    "When she didn’t like a guy who was trying to pick her up, she started using sign language.",
    "She saw no irony asking me to change but wanting me to accept her for who she is.",
    "She wanted a pet platypus but ended up getting a duck and a ferret instead.",
    "Be careful with that butter knife.",
    "The beauty of the African sunset disguised the danger lurking nearby.",
    "The light in his life was actually a fire burning all around him.",
    "Random words in front of other random words create a random sentence.",
    "Red is greener than purple, for sure.",
];
const _ = require("lodash");
const shuffleList = (type) => {
    switch (type) {
        case "words":
            let wordsArray = _.shuffle(words);
            wordsArray = wordsArray.slice(0, 30);
            return wordsArray;
        case "numbers":
            let numbersArray = _.shuffle(numbers);
            numbersArray = numbersArray.slice(0, 15);
            return numbersArray;
        case "sentences":
            let sentencesArray = _.shuffle(sentences);
            sentencesArray = sentencesArray.slice(0, 2);
            return sentencesArray;
        default:
            return _.shuffle(words).slice(0, 30);
    }
};
exports.shuffleList = shuffleList;
