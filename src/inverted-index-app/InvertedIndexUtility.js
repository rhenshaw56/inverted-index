/**
 *
 *
 * @class InvertedIndexUtility
 */
class InvertedIndexUtility {
/**
 * Checks input to see if it conforms to specific standards.
 * @param {Array} book - Book file to be validated
 * @returns {boolean} true/false - returns validation status.
 * @memberOf InvertedIndex
 */
  static validateInput(book) {
    if (Array.isArray(book) && book.length > 0 && typeof book[0] === 'object') {
      if (book[0].text && book[0].title) {
        if (typeof (book[0].text) === 'number') {
          return false;
        }
        return true;
      }
    }
    return false;
  }

/**
* Removes characters, whitespaces and converts text to array elements.
* @param {String} text returned from getBookAsText
* @returns {Array} -returns an array of words in lower-cases with no characters
* @memberOf InvertedIndexUtility
*/
  static generateToken(text) {
    return text.toLowerCase()
    .replace(/[^\w\s]|_/g, '')
    .split(/\s+/);
  }

/**
 * Gets an array of Words and makes element have unique occurrences
 * @param {Object} words - a book object with title and text property
 * @returns {Array} Words - a filtered array with unique elements
 * @memberOf InvertedIndexUtility
 */
  static createUniqueWords(words) {
    return words.filter((element, index) =>
        words.indexOf(element) === index);
  }


}
