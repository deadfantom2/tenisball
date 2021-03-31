exports.countImg = (images) => {
  return images.length === 1 ? 'Photo' : 'Photos';
};

exports.renameImage = (img) => {
  return `${img.md5.slice(0, 4)}_${img.size}.jpg`;
};
exports.reverseId = (userId) => {
  return userId.split('').reverse().join('');
};
