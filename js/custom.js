$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});
// //Exercis One ID selectiors
// alert($(#myheader)) finish this up
//  var header=$('#myHeader').html();
//  alert(header);
//  //ex 1 pt.5
// var list=$('#listOne').html();
// alert(list);

//Exercise Two CLASS selectors
// var lists=$('.codeup').css('border', '1px solid #F00');

//Exercise Three ELEMENT selectors
//alert($('h1').html());
//MULTIPLE SELECTORS
// $('li,h1,p').css('background-color', 'yellow');

//****************************************************************************

//JQUERY EVENTS

$ ('h1').click(function() {
    $(this).css('background-color', 'blue');

});
$ ('p').dblclick(function() {
    $(this).css('font-size', '18px');
});
$ ('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    });
