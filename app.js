angular.module('rdt', ['ui-router'])
.config([
  '$stateProvider',
  '$urlRouteProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      });

      $urlRouterProvider.otherwise('home');
  }])

.factory('posts', [function(){
  var o = {
    posts: []
  };
  return o;
}])

.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
    $scope.posts = posts.posts;
    $scope.posts = [
      {title: 'post 1', upvotes: 4},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 5},
      {title: 'post 4', upvotes: 2},
      {title: 'post 5', upvotes: 32},
      {title: 'post 6', upvotes: 12},
      {title: 'post 7', upvotes: 1}
      ];

    // Add Post
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.link = '';
      $scope.title = '';
    };

    // Upvotes
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }
]);
