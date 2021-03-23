const fetchQuotes = require('../fetch-quotes.js');

jest.mock('node-fetch', () => () => Promise.resolve({
  json: () => Promise.resolve([
    {
      character: 'Leela',
      quote: 'Something unimpulsive',
      image: 'http://fakeleelaimage.png'
    }
  ]),
}));


describe('test fetchQuotes function', () => {

  it('should return a quote object with name, text, and image properties', async() => {
    
    const fetchedQuote = await fetchQuotes();

    expect(fetchedQuote).toEqual({
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    });
  });
});
