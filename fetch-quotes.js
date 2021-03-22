const fetch = require('node-fetch');

const fetchQuotes = async() => {
  const res = await fetch('http://futuramaapi.herokuapp.com/api/quotes');
  const body = await res.json();
  
  const { character, quote, image } = body[0];

  return {
    name: character,
    text: quote,
    image
  };
};

module.exports = fetchQuotes;
