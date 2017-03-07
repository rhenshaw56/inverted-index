const invertedIndexApp = angular.module('invertedIndexApp', [])
    .controller('BookController', ['$scope', ($scope) => {
      $scope.invertedIndex = new InvertedIndex();
      $scope.register = [];
      $scope.fileList = [];
      $scope.indexRegister = [];
      $scope.bookNames = [];
      $scope.booksInFiles = {};
      $scope.library = [];
      $scope.mainIndex = {};
      $scope.bookIndex = {};
      // $scope.searchResult = {};
      $scope.buildMessage = '';


      $scope.uploadBooks = (bookFile) => {
        const files = Array.from(bookFile.target.files);
        files.forEach((file) => {
          $scope.$apply(() => {
            if (file.type === 'application/json' &&
             $scope.register.indexOf(file.name) === -1) {
              $scope.register.push(file.name);
              $scope.fileList.push(file);
              $scope.readBook(file, file.name);
            } else {
              $scope.badMessage = `This file is
              not a JSON file or It is already uploaded!`;
            }
          });
        });
        return status;
      };

      $scope.readBook = (file, fileName) => {
        if (!file) {
          $scope.readMessage = 'Select a file to generate an index';
        } else {
          const reader = new FileReader();
          reader.readAsText(file);
          let newBook = {};
          reader.onload = (e) => {
            try {
              newBook = JSON.parse(e.target.result);
            } catch (err) {
              $scope.buildMessage = 'Could not read Invalid File';
            }
            $scope.buildIndex(newBook, fileName);
          };
        }
      };

      $scope.buildIndex = (book, fileName) => {
        if (InvertedIndexUtility.validateInput(book)) {
          // const index = new InvertedIndex();
          // index.buildIndex(book,fileName);
          // index.buildIndex(book, fileName);
          // $scope.buildMessage = `Index Built for ${fileName}`;
          $scope.invertedIndex.buildIndex(book, fileName);
          // $scope.mainIndex = $scope.invertedIndex.mainIndex;
          // const mainIndex = index.mainIndex;
          // $scope.addToIndexList(mainIndex, fileName);
          // $scope.booksInFiles[fileName] = index.bookNames;
          // $scope.addBookNameToLibrary(index.bookNames);
          // console.log(index.mainIndex);
          console.log($scope.invertedIndex.fileIndex);
          console.log($scope.invertedIndex.mainIndex);
          console.log('yeah, i see u');
        }
      };

      // $scope.addToIndexList = (indexedFile, fileName) => {
      //   $scope.bookIndex[fileName] = indexedFile;
      // };

      $scope.showIndexTable = (file) => {
        try {
          if ($scope.bookIndex[file.name]) {
            $scope.currentIndex = $scope.bookIndex[file.name];
            $scope.bookList = $scope.booksInFiles[file.name];
            $scope.buildMessage = '';
            document.getElementById('index-table').style.display = 'block';
          } else {
            throw 'File is Invalid!';
          }
        } catch (err) {
          $scope.buildMessage = 'Please select a book to view its Index';
        }
      };
      $scope.addBookNameToLibrary = (bookNames) => {
        bookNames.forEach((name) => {
          $scope.library.push(name);
        });
      };

      $scope.search = (query, file) => {
        $scope.searchResult = {};
        try {
          $scope.buildMessage = '';
          const words = query.split(' ');
          if (!query) {
            $scope.badMessage = 'Please Enter Some word(s) to initiate search';
          } else if (file === undefined) {
            $scope.searchResult = $scope.searchInAll(words);
            $scope.headers = $scope.library;
          } else if (file !== undefined) {
            $scope.searchResult = $scope.searchInFile(words, file.name);
            $scope.headers = $scope.booksInFiles[file.name];
          }
          document.getElementById('search-table').style.display = 'block';
        } catch (err) {
          $scope.badMessage = 'Book Changed! Enter A new Word!';
        }
      };

      $scope.searchInAll = (words) => {
        const result = {};
        words.forEach((word) => {
          result[word] = $scope.invertedIndex.searchIndex(word);
        });
        return result;
      };

      $scope.searchInFile = (words, fileName) => {
        const result = {};
        const output = {};
        if ($scope.bookIndex[fileName]) {
          output[fileName] = $scope.bookIndex[fileName];
          words.forEach((word) => {
            result[word] = output[fileName][word] || [];
          });
          return result;
        }
      };
      document.getElementById('search-select')
      .addEventListener('change', $scope.search);
      document.getElementById('bookFile')
      .addEventListener('change', $scope.uploadBooks);
    }]);
