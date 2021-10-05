import yaml from 'js-yaml';

const parse = (data, extension) => {
  switch (extension) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Unexpected file format: ${extension}`);
  }
};

export default parse;
