import _ from 'lodash';

const stringify = (data, indentSize) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const lines = Object.entries(data)
    .map(([key, value]) => `${' '.repeat(indentSize + 4)}${key}: ${stringify(value, indentSize + 4)}`);
  const result = ['{', ...lines, `${' '.repeat(indentSize)}}`].join('\n');
  return result;
};

export default (tree) => {
  const iter = (nestedTree, indentSize = 0) => {
    const lines = nestedTree.map((node) => {
      const {
        type, key, after, before, children,
      } = node;
      if (type === 'added') {
        return `${' '.repeat(indentSize + 2)}+ ${key}: ${stringify(after, indentSize + 4)}`;
      } if (type === 'removed') {
        return `${' '.repeat(indentSize + 2)}- ${key}: ${stringify(before, indentSize + 4)}`;
      } if (type === 'changed') {
        return `${' '.repeat(indentSize + 2)}  ${key}: ${iter(children, indentSize + 4)}`;
      } if (type === 'unchanged') {
        return `${' '.repeat(indentSize + 2)}  ${key}: ${stringify(before, indentSize + 4)}`;
      }
      return `${' '.repeat(indentSize + 2)}- ${key}: ${stringify(before, indentSize + 4)}\n${' '.repeat(indentSize + 2)}+ ${key}: ${stringify(after, indentSize + 2)}`;
    });
    const result = ['{', ...lines.flat(), `${' '.repeat(indentSize)}}`].join('\n');
    return result;
  };
  return iter(tree);
};
