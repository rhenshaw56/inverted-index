class InvertedIndex {
	constructor() {
		this.mainIndex = {};
		this.bookStore = {};
		this.fileStore = [];
	};

	validateInput(book) {
		if(Array.isArray(book) && book.length > 0 && typeof book[0] === 'object') {
			if(book[0].hasOwnProperty('text') && book[0].hasOwnProperty('title')) {
				if (typeof (book[0].text) === 'number') {
					return false;
				}
				this.fileStore.push(book);
				return true;
			}
		}
		return false;
	}

	getBookAsText(book) {
		let status = this.validateInput([book]);
		if(status) {
			return `${book.title} ${book.text}`;
		}
		return status;
	}

	returnAsArrayOfWords (text) {
		return text.toLowerCase()
		.replace(/[^\w\s]|_/g, '')
		.split(/\s+/);
	}

	returnUniqueWords(words) {
		return words.filter((element,index) => {
			words.indexOf(element) === index;
		});
	}

	buildIndex(books) {
		const newIndex = {};
		let words = '';
		books.forEach((book)=>{
			words = this.returnAsArrayOfWords(this.getBookAsText(book));
			words.forEach((word) => {
				if(newIndex[word]){
						newIndex[word].push(book.title);

				}else{
					newIndex[word] = [book.title];
					//newIndex[word[occurences]] = occurences;
				}
			});
		});
		return newIndex;
	}

	refineIndex(rawIndex) {

	}
};

// /[^\w\s]|_/g