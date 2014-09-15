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
            style: {'background-position':'50% 40%'},
            caption: {
                quote:"Some people care too much. I think it's called love",
                author:"A.A. Milne"
            }
        },{
            image: '/images/kids_beach_bw.jpg',
            style: {'background-position':'50% 60%'},
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
    //workaround issue where video element becomes half the size when returning
    //to main page from another page
    var video = angular.element('video')
    video.hide(1,function(){
        video.show(1)
    })
    console.log("MP $scope: %o", $scope);
});

findingHope.controller('CarouselController', function($scope) {
    var $ = angular.element;
    function __createCarouselSlide(slideInfo) {
        var image = {src: slideInfo.image, style: slideInfo.style};
        var caption = slideInfo.caption || false;
        var itemDiv = $('<div></div>').addClass('item');
        var imageDiv = 
            $('<div></div>').addClass('carousel-image')
                .css("background-image", 'url(\''+image.src+'\')');
        if (image.style) { 
            Object.keys(image.style).forEach(function(key){
                imageDiv.css(key, image.style[key]);
            });
        }
        
        itemDiv.append(imageDiv)

        if (caption) {
            var quoteContainer = $('<div></div>').addClass('container')
                .append($('<div></div>').addClass('carousel-caption')
                    .append($('<h3></h3>').addClass('quote').html('&ldquo;'+caption.quote+'&rdquo;'))
                    .append($('<h3></h3>').addClass('author').text('- '+caption.author)))
            itemDiv.append(quoteContainer);
        }

        return itemDiv
    }
    var slides = $scope.$parent.carousel.slides || [];
    var carouselContainer = $('.carousel-inner');
    slides.forEach(function(slide, idx) {
        var slideDiv = __createCarouselSlide(slide)
        if (idx == 0) {
            slideDiv.addClass('active')
        }
        carouselContainer.append(slideDiv)
    });
    $('.carousel').carousel({
        interval: 5000
    });
});












