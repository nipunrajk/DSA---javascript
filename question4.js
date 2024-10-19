/**
 * Problem:
 * You are given a sorted array of integers. Write a function that finds the first pair of numbers in the array whose sum is zero. If such a pair exists, return an array containing both numbers. If no such pair exists, return undefined.
 * 
 * Input:
 * arr: A sorted list of integers.
 * 
 * Output:
 * Returns a list containing the first pair of integers that sum to zero, or None if no such pair exists.

 * 
 * Example:
 * arr = [-3, -2, -1, 0, 1, 2, 3]
   find_first_pair_with_sum_zero(arr) 
   Output: [-3, 3]

 * arr = [-2, 0, 1, 3]
   find_first_pair_with_sum_zero(arr)

   Output: None
 */



Method 1 :

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = +1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]]
    }
  }
}

console.log(sumZero([-2, -1, 0, 2]))

Method 2: 

function sumZero(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let result = arr[left] + arr[right]
    if (result === 0) {
      return [arr[left], arr[right]]
    } else if (result > 0) {
      right--
    } else {
      left++
    }
  }
}
