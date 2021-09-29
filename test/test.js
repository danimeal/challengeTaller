const assert = require('assert');
const { permuteUnique } = require('../index');
describe("TEST", () => {
  it("testHappy", () => {
    // Write your code here.    
    assert.deepStrictEqual(permuteUnique([1,2,3]),[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
    assert.deepStrictEqual(permuteUnique([1,1,2]),[[1,1,2],[1,2,1],[2,1,1]]);
    assert.deepStrictEqual(permuteUnique([1,2]),[[1,2],[2,1]]);
    assert.deepStrictEqual(permuteUnique([1]),[[1]]);
    assert.deepStrictEqual(permuteUnique(['a','b']),[['a','b'],['b','a']]);
  });
  it("testUnhappy", () => {
    // Write your code here
    assert.deepStrictEqual(permuteUnique([]),[]);
    assert.deepStrictEqual(permuteUnique([1,2,3,4,5,6,7,8,9]),[]);
    assert.deepStrictEqual(permuteUnique([1,1,1]),[[1,1,1]]);
  });
});
