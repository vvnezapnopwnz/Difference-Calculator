#!/usr/bin/env node
import { Command } from 'commander';
import _ from 'lodash';
import * as fs from 'fs';
import * as path from 'path';

const program = new Command();
program.configureHelp({
  sortSubcommands: true,
  sortOptions: false,

});
const genDiff = (filepath1, filepath2) => {
  const file1 = JSON.parse(fs.readFileSync(path.resolve(`${filepath1}`), 'utf-8'));
  const file2 = JSON.parse(fs.readFileSync(path.resolve(`${filepath2}`), 'utf-8'));
  const cb = (acc, element) => {
    const [key, value] = element;
    if (_.has(file1, key) && _.has(file2, key) && file1[key] == value && file2[key] === value) {
      return `${acc}   ${key} : ${value}\n`;
    } if (_.has(file1, key) && _.has(file2, key)) {
      if (file1[key] !== value && file2[key] == value) {
        return `${acc} - ${key} : ${file1[key]}\n + ${key} : ${value}\n`;
      }
    } else if (!_.has(file1, key) && _.has(file2, key) && file2[key] === value) {
      return `${acc} + ${key} : ${value}\n`;
    } else if (_.has(file1, key) && _.has(file2) || file1[key] == value || !file2[key] === value) {
      return `${acc} - ${key} : ${value}\n`;
    }
    return acc;
  };
  const mergedObject = _.orderBy(Object.entries({ ...file1, ...file2 }), [0], ['asc']).reduce(cb, '');
  return console.log(`{\n${mergedObject.slice(0, mergedObject.length - 1)}\n}`);
};

program
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .arguments('filepath1 filepath2')
  .action((filepath1, filepath2) => {
    genDiff(filepath1, filepath2);
  })
  .parse();

export default program;
