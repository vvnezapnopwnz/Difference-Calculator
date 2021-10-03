import * as fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import compareFiles from './compareFiles.js';
import formatterChooser from './formatters/index.js';
import parse from './parsers.js';
export default (path1, path2, format = 'stylish') => {
  const extension1 = path.extname(path1).slice(1);
  const extension2 = path.extname(path2).slice(1);

  const readFile = (pathToFile) => {
    const workingDir = process.cwd();
    return parse(fs.readFileSync(path.resolve(workingDir, pathToFile), 'utf-8'));
  };

  const file1 = readFile(path1);
  const file2 = readFile(path2);

  // const file1 = parse(filepath1, extension1);
  // const file2 = parse(filepath2, extension2);
  return formatterChooser(compareFiles(file1, file2), format);
};
// export default (path1, path2, format = 'stylish') => {
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = dirname(__filename);
//   const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
//   const readFile = (filename) => parse(fs.readFileSync(getFixturePath(filename), 'utf-8'), path.extname(filename));
//   const file1 = readFile(path1);
//   const file2 = readFile(path2);
//   return formatterChooser(compareFiles(file1, file2), format);
// };