import * as fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/gendiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('stylish', () => {
  const format1 = 'json';
  const format2 = 'yml';
  const filepath1 = getFixturePath(`file1.${format1}`);
  const filepath2 = getFixturePath(`file2.${format2}`);
  const expected = fs.readFileSync(getFixturePath('result_stylish.txt'), 'utf-8');
  expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expected);
});

test('plain', () => {
  const format1 = 'json';
  const format2 = 'yml';
  const filepath1 = getFixturePath(`file1.${format1}`);
  const filepath2 = getFixturePath(`file2.${format2}`);
  const expected = fs.readFileSync(getFixturePath('result_plain.txt'), 'utf-8');
  expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expected);
});

test('json', () => {
  const format1 = 'json';
  const format2 = 'yml';
  const filepath1 = getFixturePath(`file1.${format1}`);
  const filepath2 = getFixturePath(`file2.${format2}`);
  const expected = fs.readFileSync(getFixturePath('result_json.txt'), 'utf-8');
  expect(genDiff(filepath1, filepath2, 'json')).toEqual(expected);
});
