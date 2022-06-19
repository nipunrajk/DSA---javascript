function reverseString(arr, size) {
  let left = 0
  let right = size - 1
  let swap = (arr, idx1, idx2) => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  while (left < right) {
    swap(arr, left, right)
    left++
    right--
  }
  let reversed = []
  for (let i = 0; i < arr.length; i++) {
    reversed.push(arr[i])
  }
  return reversed
}

console.log(reverseString([1, 2, 3, 4, 5, 6], 2))
