const capitalizeAndFilter = (array) => {
  const newArray = [];
  for(const str of array) {
    if(str[0] !== 'f') {
      newArray.push(str[0].toUpperCase() + str.slice(1));
    }
  }

  return newArray;
};

module.exports = capitalizeAndFilter;
