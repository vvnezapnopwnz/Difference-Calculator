import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  return value;
};

const iter = (properties, path) => {
  const lines = properties
    .flatMap((property) => {
      const {
        key, after, before, type,
      } = property;
      const pathToProperty = [...path, key].join('.');
      switch (type) {
        case 'removed':
          return `Property '${pathToProperty}' was removed`;

        case 'updated':
          return `Property '${pathToProperty}' was updated. From ${stringify(before)} to ${stringify(after)}`;

        case 'nested':
          return iter(property.children, [...path, key]);

        case 'added':
          return `Property '${pathToProperty}' was added with value: ${stringify(after)}`;
        default:
          return '';
      }
    });

  return _.compact(lines).join('\n');
};

const plain = (tree) => `${iter(tree, [])}`;

export default plain;
