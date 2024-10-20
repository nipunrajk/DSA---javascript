/**
 * Problem:
 * You are given a sorted array of integers. Write a function that counts the number of unique values in the array. The array may contain negative values, but it is guaranteed to be sorted.
 * 
 * Input:
 * arr: A sorted list of integers.
 * 
 * Output:
 * Returns an integer representing the number of unique values in the array.

 * 
 * Example:
 * arr = [1, 1, 1, 1, 1, 2]
   count_unique_values(arr)
   Output: 2

 * arr = [-2, -1, -1, 0, 1]
   count_unique_values(arr)

   Output:4
 */

Method 1: 

 function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let count = 1;
  let i = 0;
  for (let j=1; j<arr.length; j++){
   if (arr[i] !== arr[j]){
   count ++;
    i = j;
   
  }
  }
  return count;
}

method 2:

function countUniqueValues(arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([-1, 2, 2, 2, 3, 4, 8]));
// [(-1, 2, 3, 4, 8, 2, 2)]
