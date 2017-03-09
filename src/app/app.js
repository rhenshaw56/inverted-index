/* eslint-disable no-unsed-vars */
/* eslint-disable no-undef */

const invertedIndexApp = angular.module('invertedIndexApp', [])
    .controller('BookController', ['$scope', ($scope) => {
      $scope.invertedIndex = new InvertedIndex();
      $scope.register = [];
      $scope.fileList = [];
      $scope.bookRegister = {};
      $scope.mainIndex = {};


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
          $scope.invertedIndex.buildIndex(book, fileName);
          const index = new InvertedIndex();
          index.buildIndex(book, fileName);
          const mainIndex = index.mainIndex;
          const books = index.bookNames;
          $scope.addIndexToMainIndex(mainIndex, books, fileName);
        } else {
          $scope.fileList.pop(fileName);
          $scope.register.pop(fileName);
          $scope.buildMessage = `${fileName} IS NOT VALID!`;
        }
      };

      $scope.addIndexToMainIndex = (index, books, fileName) => {
        $scope.bookRegister[fileName] = books;
        $scope.mainIndex[fileName] = index;
      };

      $scope.showIndexTable = (file) => {
        try {
          if ($scope.invertedIndex.fileIndex[file.name]) {
            $scope.currentIndex = $scope.mainIndex[file.name];
            $scope.bookList = $scope.bookRegister[file.name];
            $scope.buildMessage = '';
            document.getElementById('index-table').style.display = 'block';
          }
        } catch (err) {
          $scope.buildMessage = 'Please select a book to view its Index';
        }
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
            $scope.headers = $scope.bookRegister[file.name];
          }
          document.getElementById('search-table').style.display = 'block';
        } catch (err) {
          $scope.badMessage = 'Book Changed! Enter A new Word!';
        }
      };

      $scope.searchInAll = (words) => {
        const result = {};
        words.forEach((word) => {
          result[word] = $scope.invertedIndex.searchAll(word);
        });
        return result;
      };

      $scope.searchInFile = (words, fileName) => {
        const result = {};
        words.forEach((word) => {
          result[word] = $scope.invertedIndex.searchByFile(word, fileName);
        });
        return result;
      };
      document.getElementById('search-select')
      .addEventListener('change', $scope.search);
      document.getElementById('bookFile')
      .addEventListener('change', $scope.uploadBooks);
    }]);
