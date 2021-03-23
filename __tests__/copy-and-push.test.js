const copyAndPush = require('../copy-and-push.js');

describe('test copyAndPush function', () => {
  it('should return a new array with all items in the original array, and a new item pushed to the end', () => {
    const array = [1, 2, 3];
    const newArray = copyAndPush(array, 4);

    expect(newArray).toEqual([1, 2, 3, 4]);
    expect(array).toEqual([1, 2, 3]);
  });
});
