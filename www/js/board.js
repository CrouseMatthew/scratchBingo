'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myappApp
 */
var app = angular.module('myApp',[]);
app.controller( 'TableController', function ( $scope ) {
 $scope.cells = contents();
 // $scope.$watchCollection ('cells', function(newArray, oldArray){
 //    localStorage.clear();
 //    localStorage["board"] = JSON.stringify(newArray);
 //    return JSON.parse(localStorage["board"]);
 // });

  function contents(){
    if(localStorage.length === 0){
        var text = ['Take a picture with a bus host',
        2,3,4,5,6,7,8,9,10,11,12,'Free Square',14,15,
        16,17,18,19,20,21,22,23,24,25];

        text = shuffle(text);

        localStorage["board"] = JSON.stringify(text);
       return text;
      }else{
        var temp = JSON.parse(localStorage["board"]);
        return JSON.parse(localStorage["board"]);
      }
    }


    function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
    var searchIndex, toswap, temp = array[12];
    searchIndex = array.indexOf("Free Square");
    toswap = 12;
    array[12] = array[searchIndex];
    array[searchIndex] = temp;

  return array;
}
});


$(document).ready(function() {
    // Inline popups
    $('#inline-popups').magnificPopup({
        delegate: 'a',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    // Image popups
    $('#image-popups').magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 1000, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    // Hinge effect popup
    $('a.hinge').magnificPopup({
        mainClass: 'mfp-with-fade',
        removalDelay: 1000, //delay removal by X to allow out-animation
        callbacks: {
            beforeClose: function() {
                this.content.addClass('hinge');
            },
            close: function() {
                this.content.removeClass('hinge');
            }
        },
        midClick: true
    });
});
