exports.transformValueAccess = (value) => {
  return value[0] === 'A' ? true : false;
};

exports.reverseValue = (value) => {
  return value.toString().split('').reverse().join('');
};
