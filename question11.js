/**
 * Implement the run-length encoding algorithm in JavaScript.
 * Given a string, return its run-length encoded version.
 * For example, if the input string is "AAAABBBCCDAA", the output should be "4A3B2C1D2A".
 * If the input string is empty, the output should also be empty.
 *
 * @param {string} str - The input string to be run-length encoded.
 * @returns {string} - The run-length encoded version of the input string.
 */
function runLengthEncoding(str) {
  let encodedString = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      encodedString += str[i] + count;
      count = 1;
    }
  }
  return encodedString;
}

// Test cases
console.log(runLengthEncoding("AAAABBBCCDAA")); // Expected output: "4A3B2C1D2A"
console.log(runLengthEncoding("")); // Expected output: ""
