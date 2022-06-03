/* Q. function that accept sorted array of integers. 
      The function should find the first pair where the sum is 0.
      return an array that includes both values that sum to zero or undefined if the pair does not exist. */


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
