import _ from 'lodash';
import * as fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import parse from './parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => parse(fs.readFileSync(getFixturePath(filename), 'utf-8'), path.extname(filename));

// const compare = (file1, file2) => {
//   if ()
// }

export default (path1, path2) => {
  const file1 = readFile(path1);
  const file2 = readFile(path2);
  const compareFiles = (element) => {
    const [key, value] = element;
    if (_.has(file1, key) && _.has(file2, key)) {
      if (file1[key] === value && file2[key] === value) {
        return `    ${key} : ${value}\n`;
      }
      if (!_.isEqual(file1[key], file2[key])) {
        return `  - ${key} : ${file1[key]}\n  + ${key} : ${value}\n`;
      }
    } else if (!_.has(file1, key) && _.has(file2, key) && file2[key] === value) {
      return `  + ${key} : ${value}\n`;
    }
    return `  - ${key} : ${value}\n`;
  };
  const mergedObject = _.orderBy(Object.entries({ ...file1, ...file2 }), [0], ['asc']).map((node) => compareFiles(node));
  return `{\n${mergedObject.join('').slice(0, mergedObject.join('').length - 1)}\n}`;
};
