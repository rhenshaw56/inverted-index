
// const EmptyBook = [] || [{}];
const invertedIndex = new InvertedIndex();
const mockData = [
  {
    "title": "Alice in Wonderland",
    "text": "Alice falls rings into a rabbit hole and enters a world full of imagination."
  },

  {
    "title": "The Lord of the Rings: The Fellowship of the Ring.",
    "text": "An unusual alliance of man, elf, dwarf, wizard and hobbit seek to destroy a powerful ring."
  }
];

describe('Inverted Index Test', () => {
  describe('Validate Book Data', () => {
    it('should return invalid file type if book is not an array of objects', () => {
      expect(invertedIndex.validateInput('rowland')).toBe(false);
      expect(invertedIndex.validateInput(2)).toBe(false);
      expect(invertedIndex.validateInput([1, 2, 3])).toBe(false);
      expect(invertedIndex.validateInput([{ sex: 'male', age: 18 }])).toBe(false);
      expect(invertedIndex.validateInput([{ title: 67, text: 18 }])).toBe(false);
    });
  });
  describe('Returns a concatenated string when given an object', () => {
    it('should take an object with a title and text property and return a string concatenating those two properties', () => {
      const data = { 'title': 'Alice in wonderland', 'text': 'how did she get there abeg ?' };
      expect(invertedIndex.getBookAsText(data)).toBe('Alice in wonderland how did she get there abeg ?');
      expect(invertedIndex.getBookAsText({ sex: 'male', age: 18 })).toBe(false);
      expect(invertedIndex.getBookAsText({ title: 'rage of, angels', type: [1, 2, 3] })).toBe(false);
    });
  });
  describe('Returns a string without characters and all in lower case', () =>{
    it('should return a string of all in lower cases', () => {
      expect(invertedIndex.returnAsArrayOfWords('ABC.(D?RFG,HIJKL') ===['abcdrfghijkl']);
      expect(invertedIndex.returnAsArrayOfWords('ALICE IN, WONDERLAND') ===[ 'alice', 'in', 'wonderland' ]);
    });
  });
    describe('Returns a string without characters and all in lower case', () =>{
      it('should return a', () => {
        expect(invertedIndex.buildIndex(mockData)).toBe({ 'title': 'Alice in wonderland', 'text': 'how did she get there abeg ?' });
      });
    });
});
