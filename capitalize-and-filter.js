const capitalizeAndFilter = (array) => {
  return array
    .filter(str => str[0] !== 'f')
    .map(str => 
      str[0].toUpperCase() + str.slice(1));

};

module.exports = capitalizeAndFilter;
