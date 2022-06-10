/* maxSubarraySum
  Q. Write a function which accept an array of integer and a number called n.
     The function should calculate the maximum sum of n consecutive element in the array. */

Method 1:

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null
  }
  // -Infinity to account for the sum of consecutive -integer.If only positive integer then max=0 can be assigned
  let max = -Infinity
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0
    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))

Method 2: 

function maxSubarraySum(arr, num) {
  if (num > arr.length) return null
  maxSum = 0
  tempSum = 0
  for (let i = 0; i < num; i++) {
    tempSum += arr[i]
  }
  maxSum = tempSum
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}


console.log(maxSubarraySum([1, 2, 3, 4, 5, 6], 3))

