// factorial of given number
function recursiveMethod(num) {
  if (num === 1) return 1
  return num * recursiveMethod(num - 1)
}

console.log(recursiveMethod(5))

function ordinaryMethod(num) {
  let temp = 1
  for (let i = 1; i <= num; i++) {
    temp *= i
  }
  return temp
}
console.log(ordinaryMethod(5))

