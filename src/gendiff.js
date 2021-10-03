import * as fs from 'fs';
import path from 'path';
import compareFiles from './compareFiles.js';
import formatterChooser from './formatters/index.js';
import parse from './parsers.js';

export default (path1, path2, format = 'stylish') => {
  const readFile = (pathToFile) => {
    const workingDir = process.cwd();
    return parse(fs.readFileSync(path.resolve(workingDir, pathToFile), 'utf-8'));
  };

  const file1 = readFile(path1);
  const file2 = readFile(path2);

  return formatterChooser(compareFiles(file1, file2), format);
};
