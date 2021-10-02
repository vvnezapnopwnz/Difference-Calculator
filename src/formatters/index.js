import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatters = {
  stylish,
  plain,
  json,
};

const formatterChooser = (tree, formatType) => {
  const format = formatters[formatType];

  return format(tree);
};

export default formatterChooser;
