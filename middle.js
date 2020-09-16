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

const assertArrayEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`😜😜Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`❌❌Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const middle = function(arr) {
  let newArr = [];
  if (arr.length <= 2) {
    return newArr;
  } else if (arr.length % 2 === 1) {
    newArr.push(arr[Math.floor(arr.length / 2)]);
  } else if (arr.length % 2 === 0) {
    newArr.push(arr[Math.floor((arr.length - 1) / 2)]);
    newArr.push(arr[Math.floor(arr.length / 2)]);
  }
  return newArr;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4]));// => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]