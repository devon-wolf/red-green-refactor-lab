const getName = require('../getName.js');

describe('getName function', () => {
  it('should return the name value of an object', () => {
    const example = {
      name: 'Normal Human Name',
      age: 1,
      weight: '2 tons'
    };

    const nameValue = getName(example);
		
    expect(nameValue).toEqual('Normal Human Name');
  });
});
