const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (const key of Object.keys(obj1)) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        return eqArrays(obj1[key], obj2[key]);
      } else if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`😜😜Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😜😜Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

assertObjectsEqual({ b: "2", a: "1" }, { b: "2", a: "1" })