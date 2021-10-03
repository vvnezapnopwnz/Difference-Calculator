import * as fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import compareFiles from './compareFiles.js';
import formatterChooser from './formatters/index.js';

export default (path1, path2, format = 'stylish') => {
  const extension1 = path.extname(path1).slice(1);
  const extension2 = path.extname(path2).slice(1);

  const readFile = (pathToFile) => {
    const workingDir = process.cwd();
    return parse(fs.readFileSync(path.resolve(workingDir, pathToFile), 'utf-8'));
  };

  const filepath1 = readFile(path1);
  const filepath2 = readFile(path2);

  const file1 = parse(filepath1, extension1);
  const file2 = parse(filepath2, extension2);
  return formatterChooser(compareFiles(file1, file2), format);
};
