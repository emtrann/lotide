const assertEqual = require('./assertEqual');

const findKeyByValue = function(genre, tvShow) {
  for (const type of Object.keys(genre)) {
    if (genre[type] === tvShow) {
      return type;
    }
  }
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

module.exports = findKeyByValue;