describe('palidromes', function() {
  it('Works with a single word', function() {
    expect(palidromes('racecar')).toEqual(true);
  });
  it('Works with an ! or other punctuation', function() {
    expect(palidromes('Racecar!')).toEqual(true);
  });
  it('Works with multiple words', function() {
    expect(palidromes('A car, a man, a maraca.')).toEqual(true);
  });
  it('Works with multiple words (test 2)', function() {
    expect(palidromes('Animal loots foliated detail of stool lamina.')).toEqual(true);
  });
  it('Works when a non-palidrome is passed', function() {
    expect(palidromes('JavaScript and Java make the ultimate developer.')).toEqual(false);
  });

});