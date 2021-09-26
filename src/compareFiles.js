import _ from 'lodash';

const compareFiles = (file1, file2) => {
  const mergedObject = Object.keys({ ...file1, ...file2 });
  const tree = _.sortBy(mergedObject).map((key) => {
    if (!_.has(file2, key)) {
      return {
        type: 'removed', key, before: file1[key],
      };
    }
    if (!_.has(file1, key)) {
      return {
        type: 'added', key, after: file2[key],
      };
    }
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return {
        type: 'changed', key, before: file1[key], after: file2[key], children: compareFiles(file1[key], file2[key]),
      };
    }
    if (!_.isEqual(file1[key], file2[key])) {
      return {
        type: 'updated', key, before: file1[key], after: file2[key],
      };
    }
    return {
      type: 'unchanged', key, before: file1[key], after: file2[key],
    };
  });

  return tree;
};

export default compareFiles;
