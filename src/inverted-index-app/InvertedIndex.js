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
