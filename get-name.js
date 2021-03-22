const getName = (someObject) => {
  const { name } = someObject;
  if(name) return name;
};

// note: lab instructions ask for a final version where we 'destructure function parameters' and return name, but I'm not sure how that's different than this?

module.exports = getName;
