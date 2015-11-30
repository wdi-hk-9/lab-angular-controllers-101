angular.module('TheMET')
  .controller('DonorController', function ($scope){
  $scope.contact = {
    email: 'development@metmuseum.org',
    phone: ' 212-650-2425'
  }
  $scope.amounts = [ 50, 100, 250, 500, 1000, 5000]
});
