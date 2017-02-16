
// const EmptyBook = [] || [{}];


describe('Inverted Index Test', () => {
  describe('Validate Book Data', () => {
    it('should return invalid file type if book is not an array of objects',() => {

      expect(InvertedIndex.validateInput('rowland')).toBe('Invalid Input Type');
      expect(InvertedIndex.validateInput(2)).toBe('Invalid Input Type');
      expect(InvertedIndex.validateInput([1,2,3])).toBe('Invalid Input Type');
      expect(InvertedIndex.validateInput([{'sex': 'male','age': 18}])).toBe("Invalid Input Type");
    });
});
});