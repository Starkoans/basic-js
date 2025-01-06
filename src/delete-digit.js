const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let max = 0;
	const digits = String(n).split("");

	for (let i = 0; i < digits.length; i++) {
		let curr = Number(digits.slice(0, i).concat(digits.slice(i + 1)).join(''));
		if (curr> max) {
			max = curr;
		}
	}
	return max;
}

module.exports = {
	deleteDigit,
};
