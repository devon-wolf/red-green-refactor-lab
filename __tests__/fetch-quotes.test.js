const fetchQuotes = require('../fetch-quotes.js');


describe('test fetchQuotes function', () => {
  it('', async() => {
    const fetchedQuote = await fetchQuotes();

    expect(fetchedQuote).toHaveProperty('name');
    expect(fetchedQuote).toHaveProperty('text');
    expect(fetchedQuote).toHaveProperty('image');
    expect(Object.entries(fetchedQuote).length).toEqual(3);
  });
});
