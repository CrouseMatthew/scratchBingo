'use strict';

/**
 * @ngdoc function
 * @name myappApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myappApp
 */
var app = angular.module('myApp',[]);
app.controller( 'TableController', function ( $scope, $timeout ) {
 $scope.cells = contents();

 if(localStorage.length === 1){
    var srcList = ["","","","","","","","","","","","","","","","","","","","","","","","",""];
    localStorage.srcList = JSON.stringify(srcList);
 }else{
    srcList = JSON.parse(localStorage.srcList);
 }
  function contents(){
    if(localStorage.length === 0){
        var text = ['Take a picture with a bus host',
        "With a Fox","With a Panda","With something you can't unsee",
        "With the most people you can fit","With a Christmas tree",
        "Planking (it's coming back!)","With the drunkest person you can find",
        "Doing a yoga pose","Crazy hat party!","With the number 8",
        "Dancing...HARD",'Free Square',"With Fruit","With Something Yellow....",
        "With a Pirate (or close enough)","In the cold (You gotta show it)",
        "Holding FIRE!","With Something you'd expect from Portlandia",
        "With 4 drinks","With someone else taking a selfie","Doing shots",
        "With a mustache","Get Creative!","Being Green"];

        text = shuffle(text);

        localStorage.board = JSON.stringify(text);
        return text;
      }else{
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
