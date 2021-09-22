import genDiff from '../src/gendiff.js';

test('should return as in the task', () => {
  const file1 = 'file1.json';
  const file2 = 'file2.json';

  const expectedResult = '{\n  - follow : false\n    host : hexlet.io\n  - proxy : 123.234.53.22\n  - timeout : 50\n  + timeout : 20\n  + verbose : true\n}';
  console.log(expectedResult);
  expect(genDiff(file1, file2)).toEqual(expectedResult);
});
