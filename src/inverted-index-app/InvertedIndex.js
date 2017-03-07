/* eslint-disable no-unsed-vars */
/* eslint-disable no-undef */

/**
 *Class for creating an inverted index.
 * @class InvertedIndex
 */
class InvertedIndex {
/**
* Creates an instance of InvertedIndex.
* @memberOf InvertedIndex
*/
  constructor() {
    this.mainIndex = {};
    this.bookNames = [];
    this.fileIndex = {};
    var InvertedIndexUtility = require('./InvertedIndexUtility.js');
  }

/**
 * Gets a book and returns it's text property
 * @param {Object} book - a book object with title and text property
 * @returns {String} or {boolean} - returns boolean
 *  or string depending on if data is valid
 * @memberOf InvertedIndex
 */
  getBookText(book) {
    const status = InvertedIndexUtility.validateInput([book]);
    if (status) {
      this.bookNames.push(book.title);
      return book.text;
    }
    return status;
  }

/**
 * Builds an index for a Book Objects
 * @param {Array} books - An Array of book objects
 * @returns {Boolean} Build status as a feedback message
 * @memberOf InvertedIndex
 */
  buildIndex(books, fileName) {
    try {
      let nonUniqueWords = '';
      let words = '';
      books.forEach((book) => {
        nonUniqueWords = InvertedIndexUtility
          .generateToken(this.getBookText(book));
        words = InvertedIndexUtility.createUniqueWords(nonUniqueWords);
        words.forEach((word) => {
          if (this.mainIndex[word]) {
            this.mainIndex[word].push(book.title);
          } else {
            this.mainIndex[word] = [book.title];
          }
        });
        const mainIndex = this.mainIndex;
        this.addIndexToFileIndex(fileName, mainIndex);
        return true;
      });
    } catch (e) {
      // return false;
      return e;
    }
  }
/**
 * Takes a file name and an indexed book and stores it in tne fileIndex
 * @param {String} fileName - name of the input json file
 * @param {Object} indexedFile - index created for json file
 * @returns {none} ...
 * @memberOf InvertedIndex
 */
  addIndexToFileIndex(fileName, indexedFile) {
    if (this.fileIndex[fileName]) {
      this.fileIndex[file] = indexedFile;
    } else {
      this.fileIndex[fileName] = indexedFile;
    }
  }
/**
 * Takes in word(s) and returns found results based on created index
 * @param {String} searchedWords - Word(s) used to initiate a search
 * @param {String} fileName - name of the search file
 * @returns {Array} searchResult - An array of matched books
 * @memberOf InvertedIndex
*/
  searchIndex(searchedWords, fileName) {
    let searchResult = [];
    const output = {};
    const wordsToSearch = InvertedIndexUtility
    .createUniqueWords(InvertedIndexUtility
       .generateToken(searchedWords));
    if (!fileName) {
      wordsToSearch.forEach((searchedWord) => {
        const indexedWords = Object.keys(this.mainIndex);
        indexedWords.forEach((indexedWord) => {
          if (searchedWord === indexedWord) {
            searchResult = this.mainIndex[indexedWord];
          }
        });
      });
    } else if (this.fileIndex[fileName]) {
      output[fileName] = this.fileIndex[fileName];
      wordsToSearch.forEach((word) => {
        searchResult = output[fileName][word];
      });
    }
    return searchResult;
  }
}

const data = [{
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  }];

const iv = new InvertedIndex();
console.log(iv.buildIndex(data));
console.log(iv.mainIndex);