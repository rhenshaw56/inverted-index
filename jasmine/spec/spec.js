
const invertedIndex = new InvertedIndex();
const mockData = [
  {
    title: 'Alice in Wonderland',
    text: 'Alice falls rings.'
  },

  {
    title: 'The Lord of the Rings: The Fellowship of the Ring.',
    text: 'An unusual alliance of in the rings.'
  }
];


describe('Inverted Index Test', () => {
  describe('It Validates Book Data', () => {
    it('should return validation status for the input file',
     () => {
       expect(invertedIndex.validateInput('rowland')).toBe(false);
       expect(invertedIndex.validateInput(2)).toBe(false);
       expect(invertedIndex.validateInput([1, 2, 3])).toBe(false);
       expect(invertedIndex.validateInput([{ sex: 'male', age: 18 }]))
       .toBe(false);
       expect(invertedIndex.validateInput([{ title: 67, text: 18 }]))
       .toBe(false);
       expect(invertedIndex.validateInput(mockData)).toBe(true);
     });
  });
  describe('Returns a concatenated string', () => {
    it(`an object with a title and text property
    returns a string concatenating those two properties`,
     () => {
       const data = { title: 'Alice in wonderland',
         text: 'how did she get there abeg ?' };
       expect(invertedIndex.getBookText(data))
       .toBe('Alice in wonderland how did she get there abeg ?');
     });
  });
  describe('Does not return a concatenated string', () => {
    it('for invalid book inputs',
     () => {
       expect(invertedIndex.getBookText([{ sex: 'male', age: 18 }]))
       .toBe(false);
       expect(invertedIndex.getBookText({ title: 'rage of, angels',
         type: [1, 2, 3] })).toBe(false);
     });
  });
  describe('Returns a string without characters and all in lower case',
   () => {
     it('should return a string all in lower cases', () => {
       expect(invertedIndex.generateToken('ABC.(D?RFG,HIJKL'))
       .toEqual(['abcdrfghijkl']);
       expect(invertedIndex.generateToken(`ALICE IN,
        WONDERLAND`)).toEqual(['alice', 'in', 'wonderland']);
     });
   });
  describe('Returns an array of non-repeting strings', () => {
    it('should return an array of unique strings', () => {
      expect(invertedIndex.createUniqueWords(['alice',
        'alice'])).toEqual(['alice']);
      expect(invertedIndex.createUniqueWords(['alice', 'alice',
        'boy', 'girl', 'child', 'boy'])).toEqual(['alice',
          'boy', 'girl', 'child']);
    });
  });
  describe('Returns an index', () => {
    it('should return an index when given valid data', () => {
      const data = [{ title: 'Alice', text: 'how' }, { title: 'Rings',
        text: 'how' }];
      expect(invertedIndex.buildIndex(data)).toBe('Index Built');
    });
  });
  describe('Return an array for a given search parameters', () => {
    it(`should take in a word and an indexed book and
     return matches for that word`, () => {
      const newData = [{ title: 'Jane the virgin', text: 'rowland in' }];
      invertedIndex.buildIndex(newData);
      expect(invertedIndex.searchIndex('the')).toEqual(
        ['Jane the virgin']);
      invertedIndex.buildIndex(mockData);
      expect(invertedIndex.searchIndex('the'))
      .toEqual(['Jane the virgin',
        'The Lord of the Rings: The Fellowship of the Ring.']);
    });
  });
});

