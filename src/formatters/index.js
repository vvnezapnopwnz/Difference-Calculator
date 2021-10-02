import stylish from './stylish.js';
import plain from './plain.js';

const formatters = {
  stylish,
  plain,
};

const formatterChooser = (tree, formatType) => {
  const format = formatters[formatType];

  return format(tree);
};

export default formatterChooser;