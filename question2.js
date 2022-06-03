function charCount(str) {
  let obj = {}
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase()
      obj[char] > 0 ? obj[char]++ : (obj[char] = 1)
    }
  }
  return obj
}
function isAlphaNumeric(str) {
  let char = str.charCodeAt()
  if (
    !(char > 47 && char < 58) &&
    !(char > 64 && char < 91) &&
    !(char > 96 && char < 123)
  ) {
    return false
  }
  return true
}

let result = charCount('HELLOh!')
console.log(result)

