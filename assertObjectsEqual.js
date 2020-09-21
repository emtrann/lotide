const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😜😜Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

assertObjectsEqual({ b: "2", a: "1" }, { b: "2", a: "1" })

module.exports = assertObjectsEqual; 