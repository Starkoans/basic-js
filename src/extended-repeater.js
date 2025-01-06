const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRING PLUS 00 PLUS 00 PLUS **STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	const { repeatTimes = 1, separator = "+", addition = "", additionRepeatTimes = 1, additionSeparator = "|" } = options;
	let res = "";
	for (let i = 0; i < repeatTimes; i++) {
		let phraze = "";
		phraze += str;

		for (let j = 0; j < additionRepeatTimes; j++) {
			let add = addition;
			if (j < additionRepeatTimes - 1) {
				add += additionSeparator;
			}
			phraze += add;
		}
		if (i < repeatTimes - 1) {
			phraze += separator;
		}
		res += phraze;
	}
	// console.log(res);
	return res;
}
// repeater("STRING", {
// 	repeatTimes: 3,
// 	separator: "**",
// 	addition: "PLUS",
// 	additionRepeatTimes: 3,
// 	additionSeparator: "00",
// });

module.exports = {
	repeater,
};
