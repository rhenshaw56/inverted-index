class InvertedIndex {
	constructor() {
		this.mainIndex = {};
	};

validateInput(book) {
		if(Array.isArray(book) && book.length > 0 && typeof book[0] === 'object') {
			if(book[0].hasOwnProperty('text') && book[0].hasOwnProperty('title')) {
				if (typeof (book[0].text) === 'number') {
					return false;
				}
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

	returnUniqueWords(arrayOfWords) {
		return  arrayOfWords.filter((element,index) => {
			 return arrayOfWords.indexOf(element) === index;
		});
	}

	buildIndex(books) {
		let nonUniqueWords = '';
		let words = '';
		books.forEach((book)=>{
			nonUniqueWords = this.returnAsArrayOfWords(this.getBookAsText(book));
			words = this.returnUniqueWords(nonUniqueWords);
			words.forEach((word) => {
				this.addWordToMainIndex(word,book.title);
			});
		});
		console.log(this.mainIndex);
		return 'Index Built';
	}

	addWordToMainIndex(word,bookTitle) {
		if(this.mainIndex[word]){
						this.mainIndex[word].push(bookTitle);
		}else{
					this.mainIndex[word] = [bookTitle];
		}
	}

	searchIndex(searchedWords) {
		let searchStatus = false;
		let searchResult = {};
		let output = '';
		console.log(searchedWords);
		const wordsToSearch = this.returnUniqueWords(this.
		returnAsArrayOfWords(searchedWords));
		wordsToSearch.forEach((searchedWord) => {
			let indexedWords = Object.keys(this.mainIndex);
			indexedWords.forEach((indexedWord) => {
				if(searchedWord === indexedWord) {
					output = this.mainIndex[indexedWord];
					searchResult[searchedWord] = output;
				}
			});
		});
		return searchResult;
	}
};