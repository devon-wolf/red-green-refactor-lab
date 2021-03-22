const fetchQuotes = require('../fetch-quotes.js');


describe('test fetchQuotes function', () => {
  it('should return a quote object with name, text, and image properties', async() => {
    const fetchedQuote = await fetchQuotes();

    expect(fetchedQuote).toHaveProperty('name');
    expect(fetchedQuote).toHaveProperty('text');
    expect(fetchedQuote).toHaveProperty('image');
    expect(Object.entries(fetchedQuote).length).toEqual(3);
  });
});
