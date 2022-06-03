/* Function that accept 2 arrays 
   and return true if the second array contain the squared value of each element in the first array.
   Frequency of value must be same */

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

