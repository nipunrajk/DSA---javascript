// Maximum and minimum of an array using minimum number of comparisons

function findMinMax(arr, n) {
  let min, max, i
  if (n % 2 == 0) {
    if (arr[0] > arr[1]) {
      min = arr[0]
      max = arr[1]
    } else {
      min = arr[1]
      max = arr[0]
    }
    i = 2
  } else {
    min = arr[0]
    max = arr[0]
    i = 1
  }
  while (i < n - 1) {
    if (arr[i] > arr[i + 1]) {
      if (arr[i] > max) max = arr[i]
      if (arr[i + 1] < min) min = arr[i + 1]
    } else {
      if (arr[i + 1] > max) max = arr[i + 1]
      if (arr[i] < min) min = arr[i]
    }
    i += 2
  }
  console.log('Minimum element is', min)
  console.log('Maximum element is', max)
}
findMinMax([1000, 11, 445, 1, 330, 3000], 6)

