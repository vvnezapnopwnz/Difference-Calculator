import genDiff from '../src/gendiff.js';

const expectedResult = '{\n    common: {\n      + follow: false\n        setting1: Value 1\n      - setting2: 200\n      - setting3: true\n      + setting3: null\n      + setting4: blah blah\n      + setting5: {\n            key5: value5\n        }\n        setting6: {\n            doge: {\n              - wow: \n              + wow: so much\n            }\n            key: value\n          + ops: vops\n        }\n    }\n    group1: {\n      - baz: bas\n      + baz: bars\n        foo: bar\n      - nest: {\n            key: value\n        }\n      + nest: str\n    }\n  - group2: {\n        abc: 12345\n        deep: {\n            id: 45\n        }\n    }\n  + group3: {\n        deep: {\n            id: {\n                number: 45\n            }\n        }\n        fee: 100500\n    }\n}';

test('should return as in the task: json format, stylish', () => {
  const stylish = 'stylish';
  const file1 = 'file1.json';
  const file2 = 'file2.json';

  expect(genDiff(file1, file2, stylish)).toEqual(expectedResult);
});

test('should return as in the task: yml format, stylish', () => {
  const stylish = 'stylish';
  const file1 = 'file1.yaml';
  const file2 = 'file2.yaml';

  expect(genDiff(file1, file2, stylish)).toEqual(expectedResult);
});
const expectedResultPlain = "Property 'common.follow' was added with value: false\nProperty 'common.setting2' was removed\nProperty 'common.setting3' was updated. From true to null\nProperty 'common.setting4' was added with value: 'blah blah'\nProperty 'common.setting5' was added with value: [complex value]\nProperty 'common.setting6.doge.wow' was updated. From '' to 'so much'\nProperty 'common.setting6.ops' was added with value: 'vops'\nProperty 'group1.baz' was updated. From 'bas' to 'bars'\nProperty 'group1.nest' was updated. From [complex value] to 'str'\nProperty 'group2' was removed\nProperty 'group3' was added with value: [complex value]";

test('should return as in the task: json format, plain', () => {
  const plain = 'plain';
  const file1 = 'file1.json';
  const file2 = 'file2.json';

  expect(genDiff(file1, file2, plain)).toEqual(expectedResultPlain);
});

test('should return as in the task: yml format, plain', () => {
  const plain = 'plain';
  const file1 = 'file1.yaml';
  const file2 = 'file2.yaml';

  expect(genDiff(file1, file2, plain)).toEqual(expectedResultPlain);
});

const expectedResultJson = '[{"type":"changed","key":"common","before":{"setting1":"Value 1","setting2":200,"setting3":true,"setting6":{"key":"value","doge":{"wow":""}}},"after":{"follow":false,"setting1":"Value 1","setting3":null,"setting4":"blah blah","setting5":{"key5":"value5"},"setting6":{"key":"value","ops":"vops","doge":{"wow":"so much"}}},"children":[{"type":"added","key":"follow","after":false},{"type":"unchanged","key":"setting1","before":"Value 1","after":"Value 1"},{"type":"removed","key":"setting2","before":200},{"type":"updated","key":"setting3","before":true,"after":null},{"type":"added","key":"setting4","after":"blah blah"},{"type":"added","key":"setting5","after":{"key5":"value5"}},{"type":"changed","key":"setting6","before":{"key":"value","doge":{"wow":""}},"after":{"key":"value","ops":"vops","doge":{"wow":"so much"}},"children":[{"type":"changed","key":"doge","before":{"wow":""},"after":{"wow":"so much"},"children":[{"type":"updated","key":"wow","before":"","after":"so much"}]},{"type":"unchanged","key":"key","before":"value","after":"value"},{"type":"added","key":"ops","after":"vops"}]}]},{"type":"changed","key":"group1","before":{"baz":"bas","foo":"bar","nest":{"key":"value"}},"after":{"foo":"bar","baz":"bars","nest":"str"},"children":[{"type":"updated","key":"baz","before":"bas","after":"bars"},{"type":"unchanged","key":"foo","before":"bar","after":"bar"},{"type":"updated","key":"nest","before":{"key":"value"},"after":"str"}]},{"type":"removed","key":"group2","before":{"abc":12345,"deep":{"id":45}}},{"type":"added","key":"group3","after":{"deep":{"id":{"number":45}},"fee":100500}}]';

test('should return as in the task: json format, json', () => {
  const json = 'json';
  const file1 = 'file1.json';
  const file2 = 'file2.json';

  expect(genDiff(file1, file2, json)).toEqual(expectedResultJson);
});

test('should return as in the task: yml format, json', () => {
  const json = 'json';
  const file1 = 'file1.yaml';
  const file2 = 'file2.yaml';

  expect(genDiff(file1, file2, json)).toEqual(expectedResultJson);
});
