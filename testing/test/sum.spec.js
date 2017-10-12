const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});


test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});


test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});


test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  expect(value).not.toBe(0.3);    // It isn't! Because rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});



test('there is no I in team', () => {
  expect('team').not.toMatch(/T/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});


const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer',
];

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});


// const myMock = jest.fn();
// myMock('1');
// myMock('a', 'b');
// console.log(myMock.mock.calls);
// // > [ [1], ['a', 'b'] ]
//
//


// How to mock the data in testing...............
// const myMock = jest.fn();
//
// const a = new myMock();
// const b = {};
// const bound = myMock.bind(b);
// bound();
//
// console.log(myMock.mock.instances);
// // > [ <a>, <b> ]
//
//
// // The function was called exactly once
// expect(myMock.mock.calls.length).toBe(2);
//
// // The first arg of the first call to the function was 'first arg'
// expect(myMock.mock.calls[0][0]).toBe(undefined);
//
// // The second arg of the first call to the function was 'second arg'
// //expect(myMock.mock.calls[0][1]).toBe('second arg');
//
// // This function was instantiated exactly twice
// expect(myMock.mock.instances.length).toBe(2);
//
// // The object returned by the first instantiation of this function
// // had a `name` property whose value was set to 'test'
// expect(myMock.mock.instances[2]).toEqual(undefined);


//How to return a value in the testing of jest
// const myMock = jest.fn();
// console.log(myMock());
// // > undefined
//
// myMock.mockReturnValueOnce(0)
//  .mockReturnValueOnce('x')
//  .mockReturnValue(true);
//
// console.log(myMock(), myMock(), myMock(), myMock());
// // > 10, 'x', true, true



//How to filter the data or how to multiply the data
// const filterTestFn = jest.fn();
//
// // Make the mock return `true` for the first call,
// // and `false` for the second call
// filterTestFn
//   .mockReturnValueOnce(true)
//   .mockReturnValueOnce(false);
//
// const result = [11, 12].filter(filterTestFn);
//
// console.log(result);
// // > [11]
// console.log(filterTestFn.mock.calls);
// // > [ [11], [12] ]


// const myMockFn = jest.fn(cb => cb(null, true));
//
// myMockFn((err, val) => console.log(val));
// // > true
//
// myMockFn((err, val) => console.log(val));
// // > true


// const myMockFn = jest.fn()
//   .mockImplementationOnce(cb => cb(null, true))
//   .mockImplementationOnce(cb => cb(null, false));
//
// myMockFn((err, val) => console.log(val));
// // > true
//
// myMockFn((err, val) => console.log(val));
// // > false


// const myMockFn = jest.fn(() => 'default')
//   .mockImplementationOnce(() => 'first call')
//   .mockImplementationOnce(() => 'second call');
//
// console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// // > 'first call', 'second call', 'default', 'default'



//*************How to return this value ****************8
// const myObj = {
//   myMethod: jest.fn().mockReturnThis(),
// };
//
// // is the same as
//
// const otherObj = {
//   myMethod: jest.fn(function() {
//     return this;
//   }),
// };
