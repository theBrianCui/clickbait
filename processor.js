const QUESTION = 1;
const INCL_CAPS = 1;
const NUM_START = 1;
const YOU = 1;
const WORD_COUNT = 1;
const MAKE_ME = 1;
const MODIFIER = 1;
const CURSE = 1;

const make = [
'make you',
'can you',
'you can',
'that will',
'will make',
'people are',
'that\'ll make',
'that are',
'need to',
'you say',
'should you'
];

const modifier = [
'actually',
'awesome',
'laugh',
'hilarious',
'funniest',
'funny',
'meme',
'perfect',
'literally',
'terrible',
'pregnant',
'really',
'very',
'totally',
'hottest',
'freaking',
'tumblr',
'and it was',
'if you love',
'unicorn',
'insane',
'important',
'savage',
'crazy',
'awesome',
'a reminder',
'pinterest',
'reveal',
'pic'
];

const curse = [
'fuck',
'shit',
'damn',
'sex',
'gtfo',
'dildo',
'hell',
'butt',
'ass',
'boob',
'dick',
'penis',
'vagina',
'masturbat',
'condom'
];

const curse_short = [
'F',
'AF'
]

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
	input_stdin_array.forEach((line) => {
		var words = line.split(/[ .:;?!~,`"\r\n]+/);
		words.pop();
		const out = [];
		
		if (QUESTION) {
			if (line.indexOf('?') != -1)
				out.push(1);
			else
				out.push(0);
		}
		
		if (INCL_CAPS) {
			var HAS_CAPS = 0;
			for (let i = 0; i < words.length; i++) {
				if (words[i].length > 1 && words[i] === words[i].toUpperCase() && isNaN(parseInt(words[i]))) {
					HAS_CAPS = 1;
					break;
				}
			}
			
			out.push(HAS_CAPS);
		}
		
		if (NUM_START) {
			if (!isNaN(parseInt(words[0])))
				out.push(1);
			else
				out.push(0);
		}
		
		if (YOU) {
			out.push(Number(line.toLowerCase().indexOf('you') != -1));
		}
		
		if (WORD_COUNT)
			out.push(words.length);
		
		if (MAKE_ME) {
			var lower = line.toLowerCase();
			var hasmake = 0;
			for (let i = 0; i < make.length; i++) {
				if (lower.indexOf(make[i]) != -1) {
					hasmake = 1;
					break;
				}
			}
			
			out.push(hasmake);
		}
		
		if (MODIFIER) {
			var lower = line.toLowerCase();
			var hasmod = 0;
			
			for (let i = 0; i < modifier.length; i++) {
				if (lower.indexOf(modifier[i]) != -1) {
					hasmod = 1;
					break;
				}
			}
			
			out.push(hasmod);
		}
		
		if (CURSE) {
			var lower = line.toLowerCase();
			var hascurse = 0;
			for (let i = 0; i < curse.length; i++) {
				if (lower.indexOf(curse[i]) != -1) {
					hascurse = 1;
					break;
				}
			}
			
			for (let i = 0; i < words.length; i++) {
				for (let k = 0; k < curse_short.length; k++) {
					if (words[i] === curse_short[k]) {
						hascurse = 1;
						break;
					}
				}
			}
			
			out.push(hascurse);
		}
		
		console.log(out.join('\t'));
	});
});

function readLine() {
    return input_stdin_array[input_currentline++];
}