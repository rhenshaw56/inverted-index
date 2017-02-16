var InvertedIndex = {

	validateInput: function(book) {
		if(Array.isArray(book) && book.length > 0 && typeof book[0] === 'object') {
			if(book[0].hasOwnProperty('text') && book[0].hasOwnProperty('title')) {
				return 'Valid';
			}
		}
		return 'Invalid Input Type';
	}

};

const newBook = [
    {
    "title": "Alice in Wonderland",
    "text": "Alice falls into a rabbit hole and enters a world full of imagination."
  }
];

//console.log(InvertedIndex.validateInput(newBook));