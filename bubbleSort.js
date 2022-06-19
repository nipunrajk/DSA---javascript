//Method 1

function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  let isswap
  for (let i = arr.length - 1; i > 0; i--) {
    isswap = true
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        isswap = false
      }
    }
    if (isswap) break
  }

  return arr
}


//Method 2
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  let isSwap
  for (let i = 0; i < arr.length; i++) {
    isSwap = true
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1)
        isSwap = false
      }
    }
    if (isSwap) break
  }
  return arr
}

console.log(bubbleSort([21, 11, 42, 24, 44]))



