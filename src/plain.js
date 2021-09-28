import _ from 'lodash';

const stringify = (key, after, path) => {
    if (!_.isObject(after)) {
        const value = path;
        return `Property ${value}'${key}' was added with value: '${after}'`;
    }
    return `Property '${key}' was added with value: [complex value]`;
};
const stringifyUpdated = (key, after, before) => {
    if (_.isObject(before)) {
        return `Property '${key}' was updated. From [complex value] to '${after}'`;
    }
    return `Property '${key}' was updated. From '${before}' to '${after}'`;
};
const stringifyRemoved = (key) => {
    return `Property '${key}' was removed`;
};

const plain = (tree) => {
    const iter = (nestedTree, path) => {
        const lines = nestedTree.flatMap((node) => {
            const {
                type, key, after, before, children,
              } = node;
              if (_.has(node, key) && _.has(node, after)) {
                  path += key;
              } 
              if (type === 'added') {
                  return stringify(key, after, path);
              }
              if (type === 'changed') {
                  return iter(children, path);
              }
              if (type === 'updated') {
                  return stringifyUpdated(key, after, before);
              }
              if (type == 'removed') {
                  return stringifyRemoved(key);
              }
        });
        return _.compact(lines).join('\n');
    }; 
    return iter(tree, '');
};

export default plain;
