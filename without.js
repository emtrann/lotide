const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let result = []; 
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      result.push(source[i]);
    }
  }
  return result;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

module.exports = without;