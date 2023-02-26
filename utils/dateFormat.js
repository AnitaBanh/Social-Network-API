function dateFormat(timestamp) {
  const options = {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric',
  };

  // return formatted date string
  return new Date(timestamp).toLocaleDateString('en-US', options);
}

module.exports = dateFormat;