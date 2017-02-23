const invertedIndexApp = angular.module('invertedIndexApp', [])
    .controller('BookController', ['$scope', ($scope) => {
      $scope.bookList = {};
      $scope.invertedIndex = new InvertedIndex();


      $scope.uploadBooks = (bookFile) => {
        let status = false;
        const books = Array.from(bookFile.target.files);
        books.forEach((book) => {
          $scope.$apply(() => {
            if (book.type === 'application/json' && !$scope.bookList[book]) {
              $scope.bookList[book.name] = book;

              $scope.readFile(book);

              console.log('validated');
              status = true;
            }else{
              $scope.badMessage = 'This file is not a JSON file';
              console.log('not validated');
              return;
            }
          });
        });
        console.log($scope.bookList.length);
        return status;
      };

      $scope.readFile = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          let bookFile = {};
          try{
            bookFile = JSON.parse(e.target.result);
            console.log(bookFile);
          }catch(err){
            $scope.badMessage = "Could not read file " + file.name;
            return;
          }
        };
         reader.readAsText(file);

      };

      document.getElementById('bookFile')
            .addEventListener('change', $scope.uploadBooks);
    }]);
