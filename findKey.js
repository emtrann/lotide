const assertEqual = require('./assertEqual');

const findKey = function(obj, callback) {
  for (const keys of Object.keys(obj)) {
    if (callback(obj[keys])) {
      return keys;
    }
  }
}


assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma") // => "noma"

module.exports = findKey;