// app/index.js
const calc = require('./calc')
const numbersToAdd = [
    2,
    4,
    16,
    32,
    64,
    128
]
const result = calc.sum(numbersToAdd)
console.log(`The result is: ${result}`)
