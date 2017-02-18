angular.module('invertedIndexApp', [])
    .controller('BookController', ['$scope', ($scope) => {
      $scope.bookList = [];

      $scope.validateBooks = (bookFile) => {
        let status = false;
        const books = Array.from(bookFile.target.files);
        $scope.badBooks = [];
        books.forEach((book) => {
          $scope.$apply(() => {
            if (book.type === 'application/json') {
              $scope.bookList.push(book);
            //   console.log(booklist[0]);
              status = true;
            } else {
              $scope.badBooks.push(book.name);
            }
          });
        });
        return status;
      };
      document.getElementById('bookFile')
            .addEventListener('change', $scope.validateBooks);
    }]);
