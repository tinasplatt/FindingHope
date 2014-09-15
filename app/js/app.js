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
    $scope.carousel = {
        slides:[{
            image: '/images/kids_running_bw.jpg',
            style: 'background-position: 50% 40%;',
            caption: {
                quote:"Some people care too much. I think it's called love",
                author:"A.A. Milne"
            }
        },{
            image: '/images/kids_beach_bw.jpg',
            style: 'background-position: 50% 60%;',
            caption: {
                quote:"Be joyful always; pray continually; give thanks in all circumstances...",
                author:"1 Thessalonians 5:16-18"
            }
        },{
            image: '/images/girl_bw.jpg',
            caption: {
                quote:"Love is not a fight. But, it's something worth fighting for",
                author:"Warren Barfield"
            } 
        }]
    };
    angular.element('.carousel').carousel({
        interval: 5000
    });
    //workaround issue where video element becomes half the size when returning
    //to main page from another page
    var video = angular.element('video')
    video.hide(1,function(){
        video.show(1)
    })
    console.log("MP $scope: %o", $scope);
});

findingHope.controller('CarouselController', function($scope){
    $scope.slides = $scope.$parent.carousel.slides;
    $scope.init = function() {
        console.log("images: "+angular.element('.carousel-image').length);
        console.log("I was called") 
    }
});