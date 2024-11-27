  /**
   * Encodes an array of numerical IDs into a string where each ID is represented by a corresponding character.
   * @param {number[]} IdArrayDeck - The array of numerical IDs to encode.
   * @returns {string} - The encoded string where each character represents a numerical ID.
   */
  export function encodeIDDeckToString(IdArrayDeck) {
    let encodedString = "";
    for (let i = 0; i < IdArrayDeck.length; i++) {
      encodedString += String.fromCharCode(IdArrayDeck[i]);
    }
    return encodedString;
  }

  /**
   * Function to decode a string back into an array of numeric IDs.
   * @param {string} stringDeck - The encoded string to decode.
   * @returns {number[]} - An array of numeric IDs decoded from the string.
   */
  export function decodeStringDeckToID(stringDeck) {
    let decodedNumbers = [];
    for (let i = 0; i < stringDeck.length; i++) {
      decodedNumbers.push(stringDeck.charCodeAt(i));
    }
    return decodedNumbers;
}
  

decksObj  = [
    "ϱϵ⌨⌬⌭⫼᝱ᝲ⻡✐✑✗஻᝵〈✔✖⬀⬅ᝳὃ⌯⬁⻤畅甼礚礜畈✒",
    "⫻⫼᭙᭠᭘ϱϵϬᎍ᭛⬀⬅⻠ᝳὃ⬁⻢⻤Ϸὄ㋉礜町畅礤畈畀礘甾᭜",
    "ஹߐϬ᭙᭘஺᭠Ϯ᭛ߔߕ஼᭜⻢᭝᭣㋉᭞᭢ὅ礜礝甿畀礘申男礙畁ὄ",
    "⫸✐✑᝱⫼᭘✗ϱ᭙ᝲ⻡᭛ὂ✒✔✖⬀⬃⬅ᝳ᭜ὃ⬁⻢礜甽畈礘⫹⻤",
    "㋈㋊஺ஹϬߐϮ᭛⻠ߔߕ᝶⻢⻣⻤Ϸ㋉㋌甽礩礨畅礜礥礪礬畀礭甾礘",
    "ᝰ᝱ᝲྠ⫼ϱὁ✑✐✗⻡⫸⫹Ϭ⫻ᎍὂ✒✔✖⬀⬅ᝳὃ⬁⻤礜礤畈畅",
    "⫸⫼⫽ϱ⫺⫿✐✑✗ᝲ᝱᭘᭛✒✔✖⬀⬃⬅ߔὃ⬁⻢⻤礝礜畅画畀礘",
    "⫼⫸⫹᝱ᝲ⻡ϱߐϬ᭘ϵϮϻ⬀⬃⬅ᝳὃ⬁⻢⻤畅礜甴礢礝畈畆礣町",
    "⫸⫼⌬᝱⌫⫹⌨⻡⌰⌭ᝰ✗஻஽᝵〈⬀⬃⌯〉甹畅礝甼礚田礜甴畂畈",
    "Ϭ᭘ߐ᭙᭠Ϯ᭛ߔߕ⻢᭝᭣㋉㋌᭞᭢ὅ礜礝畀礘申男畁礙✑✐✖✕✙",
    ""
];