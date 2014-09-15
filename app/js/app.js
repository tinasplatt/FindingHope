var findingHope = angular.module('findingHopeSite',['ngRoute']);
findingHope.config(function($logProvider, $routeProvider){
    $logProvider.debugEnabled(true);
    $routeProvider.
        when('/',{
            templateUrl: 'template/main.html',
            controller: 'MainPageCtrl'
        })
        .when('/about',{
            templateUrl: 'template/about.html'
        })
        .otherwise({
            redirectTo:'/'
        });
});

findingHope.controller('MainPageCtrl', function($scope){
    angular.element('.carousel').carousel({
        interval: 5000
    });
    //workaround issue where video element becomes half the size when returning
    //to main page from another page
    var video = angular.element('video')
    video.hide(1,function(){
        video.show(1)
    })
});