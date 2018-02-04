export const objectFromArray = (arr, key = 'id') => {
  if (arr && arr.length) {
    return arr.reduce((value, index) => {
      value[index[key]] = index;
      return value;
    }, {});
  }
  return {};
};

export const arrayFromObject = (obj, key = 'id') => {
  return Object.keys(obj).map(key => (obj[key]));
};

export const guid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4() + s4() + s4()}`;
};

export const sortedBy = (posts, sortingPref) => {
  const returnValues = arrayFromObject(posts, 'id');
  if (sortingPref) {
    switch (sortingPref) {
      case 'byScore':
        return returnValues.sort((x, y) => (x.voteScore < y.voteScore));
      case 'byDate':
        return returnValues.sort((x, y) => (x.timestamp < y.timestamp));
      default:
        return returnValues;
    }
  }
  return returnValues;
};
