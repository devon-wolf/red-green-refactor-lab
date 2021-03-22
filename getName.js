const getName = (someObject) => {
  const { name } = someObject;
  if(name) return name;
};

module.exports = getName;
