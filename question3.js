/**
 * Problem:
 * You are given two strings, str1 and str2. Write a function that checks whether the two strings are anagrams of each other. Two strings are anagrams if they contain the same characters with the same frequencies.
 * 
 * Input:
 * str1: A string consisting of lowercase and/or uppercase letters.
   str2: A string consisting of lowercase and/or uppercase letters. 
 * 
 * Output:
 * Returns True if str1 and str2 are anagrams of each other. Otherwise, returns False.
 * 
 * Example:
 * str1 = "listen"
   str2 = "silent"
   are_anagrams(str1, str2)

   Output: True

 * str1 = "hello"
   str2 = "billion"
   are_anagrams(str1, str2)

   Output: False

 * Constraints:
 * The strings may contain both uppercase and lowercase letters.
   The strings may be of different lengths.
 */

Method 1:

function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let char of str1) {
   frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
   frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  for (let key in frequencyCounter1){
    if (!frequencyCounter2[key]) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false
   }
  return true;
}



Method 2: 

function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  let frequencyCounter = {};
  for (let char of str1) {
   frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }
  for (let char of str2){
    if (!frequencyCounter[char]) return false;
    else{
     frequencyCounter[char] -= 1;
    }
   }
  return true;
}

console.log(validAnagrams('anagram', 'nagarame'))

