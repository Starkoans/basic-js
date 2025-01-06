const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * cur a
 * count 2
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let res = "";
	let currChar = str[0];
	let currCharRepeat = 1;
	for (let i = 0; i < str.length; i++) {

		if (str[i + 1] !== currChar || i === str.length - 1) {
			if (currCharRepeat > 1) {
				res += currCharRepeat + currChar;
			} else {
				res += currChar;
			}
			currChar = str[i + 1];
			currCharRepeat = 1;
		} else {
			currCharRepeat++;
		}
	}
	return res;
}

module.exports = {
	encodeLine,
};
