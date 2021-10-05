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

const plain = (tree) => {
  const iter = (properties, path) => {
    const lines = properties
      .flatMap((property) => {
        const {
          key, after, before, type,
        } = property;
        const pathToProperty = [...path, key].join('.');
        if (type === 'removed') {
          return `Property '${pathToProperty}' was removed`;
        }
        if (type === 'updated') {
          return `Property '${pathToProperty}' was updated. From ${stringify(before)} to ${stringify(after)}`;
        }
        if (type === 'nested') {
          return iter(property.children, [...path, key]);
        }
        if (type === 'added') {
          return `Property '${pathToProperty}' was added with value: ${stringify(after)}`;
        }
        return '';
      });

    return _.compact(lines).join('\n');
  };

  return `${iter(tree, [])}`;
};

export default plain;
