
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns ['lighthouse', 'labs'], for ['yo yo', 'lighthouse', 'labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs'])
  });

  it("returns ['are', 'you'] for ['how', 'are', 'you']", () => {
    assert.deepEqual(tail(['how', 'are', 'you']), ['are', 'you'])
  });

});