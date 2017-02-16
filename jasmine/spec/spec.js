/* Test Setup */
// const myInvertedIndex = new InvertedIndex();
// const book = require('./../books.json');
// const emptyBook = require('./../empty-book.json');

// myInvertedIndex.files['book.json'] = book;
const EmptyBook = [] || [{}];
const ValidBook = [
    {
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  }
];

/* Test Suites */
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

    // it('should return true when validating a good JSON array', () => {
    //   expect(InvertedIndex.readBookData(book))
    //   .toBeTruthy();
    //     });

    //     it('should return correct keys for files when file is saved', () => {
    //         expect(Object.keys(InvertedIndex.files))
    //             .toEqual(['book.json']);
    //     });

    //     it('should ensure the file content is saved accurrately', () => {
    //         expect(InvertedIndex.files['book.json'])
    //             .toEqual(book);
    //     });
    // });

    // describe('Populate Data', () => {
    //     it('should ensure that index is created', () => {
    //         expect(InvertedIndex.createIndex('book.json'))
    //             .toBeTruthy();
    //     });

    //     it('should ensure that index of a file is returned accurrately', () => {
    //         expect(InvertedIndex.getIndex('book.json').alice)
    //             .toEqual([0]);
    //     });
    // });

    // describe('Search Index', () => {
    //     it('should return correct index of the search term', () => {
    //         expect(InvertedIndex.searchIndex('alice'))
    //             .toEqual({ 'book.json': { alice: [0] } });
    //     });
    //     it('should return false when no result is found', () => {
    //         expect(InvertedIndex.searchIndex('impossibility'))
    //             .toBeFalsy();
    //     });
    // });
// });



