const invertedIndex = new InvertedIndex();
const mockData = data.json;
console.log(mockData);

describe('INVERTED INDEX TEST', () => {
  describe('IT VALIDATES BOOK DATA', () => {
    it('should return validation status for the input file',
     () => {
       expect(InvertedIndexUtility.validateInput('rowland')).toBe(false);
       expect(InvertedIndexUtility.validateInput(2)).toBe(false);
       expect(InvertedIndexUtility.validateInput([1, 2, 3])).toBe(false);
       expect(InvertedIndexUtility.validateInput([{ sex: 'male', age: 18 }]))
       .toBe(false);
       expect(InvertedIndexUtility.validateInput([{ title: 67, text: 18 }]))
       .toBe(false);
      //  expect(InvertedIndexUtility.validateInput(mockData)).toBe(true);
     });
  });
  describe('RETURNS A CONCATENATED STRING', () => {
    it(`an object with a title and text property
    returns a string concatenating those two properties`,
     () => {
       const data = { title: 'Alice in wonderland',
         text: 'how did she get there abeg ?' };
       expect(invertedIndex.getBookText(data))
       .toBe('Alice in wonderland how did she get there abeg ?');
     });
  });
  describe('DOES NOT RETURN A CONCATENATED STRING', () => {
    it('for invalid book inputs',
     () => {
       expect(invertedIndex.getBookText([{ sex: 'male', age: 18 }]))
       .toBe(false);
       expect(invertedIndex.getBookText({ title: 'rage of, angels',
         type: [1, 2, 3] })).toBe(false);
     });
  });
  describe('RETURNS A STRING WITHOUT CHARACTERS AND ALL IN LOWER CASE',
   () => {
     it('should return a string all in lower cases', () => {
       expect(InvertedIndexUtility.generateToken('ABC.(D?RFG,HIJKL'))
       .toEqual(['abcdrfghijkl']);
       expect(InvertedIndexUtility.generateToken(`ALICE IN,
        WONDERLAND`)).toEqual(['alice', 'in', 'wonderland']);
     });
   });
  describe('RETURNS AN ARRAY OF NON-REPETING STRINGS', () => {
    it('should return an array of unique strings', () => {
      expect(InvertedIndexUtility.createUniqueWords(['alice',
        'alice'])).toEqual(['alice']);
      expect(InvertedIndexUtility.createUniqueWords(['alice', 'alice',
        'boy', 'girl', 'child', 'boy'])).toEqual(['alice',
          'boy', 'girl', 'child']);
    });
  });
  describe('RETURNS A BUILT INDEX', () => {
    it('should return "index built" when given valid data', () => {
      const data = [{ title: 'Alice', text: 'how to' }, { title: 'Rings',
        text: 'how' }];
      expect(invertedIndex.buildIndex(data)).toBe('Index Built');
    });
  });
  describe('RETURN AN ARRAY FOR GIVEN SEARCH PARAMETERS', () => {
    it(`should take in a word and an indexed book and
     return matches for that word`, () => {
      const newData = [{ title: 'Jane to the virgin', text: 'rowland in' }];
      invertedIndex.buildIndex(newData);
      expect(invertedIndex.searchIndex('the')).toEqual(
        ['Jane to the virgin']);
      // invertedIndex.buildIndex(newData);
      expect(invertedIndex.searchIndex('to'))
      .toEqual(['Alice', 'Jane to the virgin']);
    });
  });
});

