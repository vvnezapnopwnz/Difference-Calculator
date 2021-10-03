import yaml from 'js-yaml';

const parse = (data, extension) => {
  if (extension === 'json') {
    return JSON.parse(data);
  }
  if (extension === 'yaml') {
    return yaml.load(data);
  }
  return yaml.load(data);
};

export default parse;
