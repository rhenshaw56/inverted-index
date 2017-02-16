
// const EmptyBook = [] || [{}];
const ValidBook = [
    {
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  }
];


describe('Inverted Index Test', () => {
  describe('Validate Book Data', () => {
    it('should return invalid file type if book is not an array of objects',() => {

      expect(InvertedIndex.validateInput('rowland')).toBe('Invalid Input Type');
      expect(InvertedIndex.validateInput(2)).toBe('Invalid Input Type');
      expect(InvertedIndex.validateInput([1,2,3])).toBe('Invalid Input Type');
      expect(InvertedIndex.validateInput(ValidBook)).toBe('Valid');
      expect(InvertedIndex.validateInput([{'sex': 'male','age': 18}])).toBe("Invalid Input Type");
    });
});
});