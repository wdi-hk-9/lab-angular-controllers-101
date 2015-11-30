angular.module('TheMET')
  .controller('ExhibitController', function ($scope){
    $scope.artist      = 'John Sargent';
    $scope.title       = 'Sargent Portraits of Artists & Friends';
    $scope.location    = 'Gallery 999';
    $scope.headerImage = 'http://www.metmuseum.org/~/media/Images/Exhibitions/2015/Sargent/Sargent_DIGITAL_Hero.jpg?h=360&mw=988&w=988';
  }
);
