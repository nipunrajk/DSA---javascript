/* Q. countUniqueValues
   implement a function that accept a sorted array, and count unique values in the array.
   There can be negative values in the array, but it should be sorted. */

function countUniqueValues(arr) {
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

console.log(countUniqueValues([-1, 2, 2, 2, 3, 4, 8]))
// [(-1, 2, 3, 4, 8, 2, 2)]

