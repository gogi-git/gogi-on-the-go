angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Listing an array of sidebar items
  $scope.contentItems = [
    { title: 'Boss Of My Brain', id: 1, content: "Placeholder content" },
    { title: 'Belly Breathing', id: 2, content: "Placeholder content" },
    { title: 'Five Second Lightswitch', id: 3, content: "Placeholder content" },
    { title: 'Positive Thoughts', id: 4, content: "Placeholder content" },
    { title: 'Positive Words', id: 5, content: "Placeholder content" },
    { title: 'Positive Actions', id: 6, content: "Placeholder content" },
    { title: 'Claim Responsibility', id: 7, content: "Placeholder content" },
    { title: 'Let Go', id: 8, content: "Placeholder content" },
    { title: 'Forgive', id: 9, content: "Placeholder content" },
    { title: 'What If', id: 10, content: "Placeholder content" },
    { title: 'Reality Check', id: 11, content: "Placeholder content" },
    { title: 'Ultimate Freedom', id: 12, content: "Placeholder content" }
  ];

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ToolCtrl', function($scope, $stateParams) {
});
