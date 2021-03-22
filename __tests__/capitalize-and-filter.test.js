const capitalizeAndFilter = require('../capitalize-and-filter');

describe('test capitalizeAndFilter function', () => {
  it('should take an array of strings and capitalize all strings', () => {
    const newArray = capitalizeAndFilter(['hello', 'how', 'are', 'you']);

    expect(newArray).toEqual(['Hello', 'How', 'Are', 'You']);
  });

  it('should filter out any string that starts with the letter f', () => {
    const newArray = capitalizeAndFilter(['first', 'things', 'first']);

    expect(newArray).toEqual(['Things']);
  });
});
