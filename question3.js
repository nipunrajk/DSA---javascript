//Q. Anagrams

Method 1:

function input(str1, str2) {
  if (str1.length !== str2.length) return false
  frequencyCount1 = {}
  frequencyCount2 = {}
  for (let char of str1) {
    frequencyCount1[char] = (frequencyCount1[char] || 0) + 1
  }
  for (let char of str2) {
    frequencyCount2[char] = (frequencyCount2[char] || 0) + 1
  }
  for (let char in frequencyCount1) {
    if (!(char in frequencyCount2)) return false
    else {
      frequencyCount2[char] -= 1
    }
  }
  return true
}


Method 2: 

function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false
  frequencyCounter = {}
  for (let char of str1) {
    frequencyCounter[char]
      ? (frequencyCounter[char] += 1)
      : (frequencyCounter[char] = 1)
  }
  for (let char of str2) {
    if (!(char in frequencyCounter)) return false
    else {
      frequencyCounter[char] -= 1
    }
    return true
  }
}

console.log(validAnagrams('anagram', 'nagarame'))

