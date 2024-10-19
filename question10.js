/**
 * Run-Length Decoding
 *
 * Given a string encoded with run-length encoding, write a function to decode it.
 *
 * Example:
 * Input: "3A2B1C"
 * Output: "AAABBBC"
 *
 * Input: "4X6Y2Z"
 * Output: "XXXXYYYYYYZZ"
 *
 * Write a function `runLengthDecode` that takes a string as input and returns the decoded string.
 */

function runLengthDecode(encodedString) {
  let decodedString = "";
  for (let i = 0; i < encodedString.length; i += 2) {
    decodedString += encodedString[i + 1].repeat(encodedString[i]);
  }
  return decodedString;
}

// Test cases
console.log(runLengthDecode("3A2B1C")); // Expected output: "AAABBBC"
console.log(runLengthDecode("4X6Y2Z")); // Expected output: "XXXXYYYYYYZZ"
