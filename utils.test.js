const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
  var res = utils.add(1, 3);

//asercja
  expect(res).toBe(4);
  // if(res != 4) {
  //   throw new Error('Value not correct.');
  // }
})
