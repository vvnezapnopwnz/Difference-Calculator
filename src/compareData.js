import _ from 'lodash';

const compareData = (data1, data2) => _.sortBy(Object.keys({ ...data1, ...data2 })).map((key) => {
  if (!_.has(data2, key)) {
    return {
      type: 'removed', key, before: data1[key],
    };
  }
  if (!_.has(data1, key)) {
    return {
      type: 'added', key, after: data2[key],
    };
  }
  if (_.isObject(data1[key]) && _.isObject(data2[key])) {
    return {
      type: 'nested', key, before: data1[key], after: data2[key], children: compareData(data1[key], data2[key]),
    };
  }
  if (!_.isEqual(data1[key], data2[key])) {
    return {
      type: 'updated', key, before: data1[key], after: data2[key],
    };
  }
  return {
    type: 'unchanged', key, before: data1[key], after: data2[key],
  };
});

export default compareData;
