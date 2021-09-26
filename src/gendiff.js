import * as fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import parse from './parsers.js';
import compareFiles from './compareFiles.js';
import stylish from './stylish.js';

export default (path1, path2) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
  const readFile = (filename) => parse(fs.readFileSync(getFixturePath(filename), 'utf-8'), path.extname(filename));
  const file1 = readFile(path1);
  const file2 = readFile(path2);
  return stylish(compareFiles(file1, file2));
};
