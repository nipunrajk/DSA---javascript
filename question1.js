/**
 * Problem:
 * You are given two arrays of integers, arr1 and arr2. Write a function that checks whether each value in arr1 has its corresponding value squared in arr2. The frequency of each value in arr1 should match the frequency of its squared value in arr2.
 * 
 * Input:
 * arr1: A list of integers.
   arr2: A list of integers.
 * 
 * Output:
 * Returns True if every value in arr1 has its corresponding value squared in arr2 with the same       frequency. Otherwise, returns False.
 * 
 * Example:
 * arr1 = [1, 2, 3, 2]
   arr2 = [1, 4, 9, 4]
   has_corresponding_squares(arr1, arr2)

   Output: True

 * arr1 = [1, 2, 3]
   arr2 = [1, 4, 9, 9]
   has_corresponding_squares(arr1, arr2) 

   Output: False
 * Constraints:
 * The arrays may contain negative numbers.
   The arrays may contain duplicate values.
   The arrays are not necessarily sorted.
 */

Method 1:

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    let expected = arr2.indexOf(arr1[i] ** 2)
    if (expected === -1) return false
    arr2.splice(expected, 1)
    console.log(arr2)
  }
  return true
}

console.log(same([1, 2], [4, 1]))


Method 2: 

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  frequencyCounter1 = {}
  frequencyCounter2 = {}
  for (let count of arr1) {
    frequencyCounter1[count] = (frequencyCounter1[count] || 0) + 1
  }
  for (let count of arr2) {
    frequencyCounter2[count] = (frequencyCounter2[count] || 0) + 1
  }
  for (key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false
  }
  return true
}

console.log(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 25]))

