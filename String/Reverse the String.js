// method 1

function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString('Hello'))

//Method 2

function reverseString(str) {
  let reversed = ''
  for (let i = str.length - 1; i > 0; i--) {
    reversed += str[i]
  }
  return reversed
}


//Method 3

function reverseString(str) {
  if (str === '') return ''
  return reverseString(str.substr(1)) + str.charAt(0)
}

console.log(reverseString('hello'))

