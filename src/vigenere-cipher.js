const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(isDirect = true) {
		this.isDirect = isDirect;
	}
	encrypt(message, key) {
		if (!message || !key) throw new Error("Incorrect arguments!");

		const upperMessage = message.toUpperCase();
		const upperKey = key.toUpperCase();
		let encrypted = "";
		let keyIndex = 0;

		for (let char of upperMessage) {
			if (char.match(/[A-Z]/)) {
				const msgCode = char.charCodeAt(0) - 65;
				const keyCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;
				const encryptedChar = String.fromCharCode(((msgCode + keyCode) % 26) + 65);
				encrypted += encryptedChar;
				keyIndex++;
			} else {
				encrypted += char;
			}
		}

		return this.isDirect ? encrypted : encrypted.split("").reverse().join("");
	}
	decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) throw new Error("Incorrect arguments!");

		const upperMessage = encryptedMessage.toUpperCase();
		const upperKey = key.toUpperCase();
		let decrypted = "";
		let keyIndex = 0;

		for (let char of upperMessage) {
			if (char.match(/[A-Z]/)) {
				const msgCode = char.charCodeAt(0) - 65;
				const keyCode = upperKey[keyIndex % upperKey.length].charCodeAt(0) - 65;
				const decryptedChar = String.fromCharCode(((msgCode - keyCode + 26) % 26) + 65);
				decrypted += decryptedChar;
				keyIndex++;
			} else {
				decrypted += char;
			}
		}

		return this.isDirect ? decrypted : decrypted.split("").reverse().join("");
	}
}

module.exports = {
	VigenereCipheringMachine,
};
