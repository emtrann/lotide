const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1)

assertArraysEqual(map(words, word => word[0]), results1);


const numbers = [1, 2, 3, 4, 5]
assertArraysEqual(map(numbers, num => num *= 2), [2, 4, 6, 8, 10])

const emptyArr = []; 
assertArraysEqual(map(emptyArr, element => undefined), []);

module.exports = map;