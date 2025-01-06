const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let count = 0;
	let s1_arr = s1.split("");
	let s2_arr = s2.split("");
	for (let i = 0; i < s1_arr.length; i += 1) {
		const find_ind = s2_arr.indexOf(s1_arr[i]);
		if (find_ind >= 0) {
			count += 1;
			s2_arr[find_ind] = "*";
		}
	}
	return count;
}

module.exports = {
	getCommonCharacterCount,
};
