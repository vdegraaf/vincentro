const getAvg = array => {
  if (array.length === 0) {
    return 0;
  }

  const newArr = array.map(item => {
    return parseInt(item);
  });

  const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  return Math.round(arrAvg(newArr));
};

export default getAvg