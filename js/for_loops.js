"use strict";
(function () {
//FOR LOOPS 2.
    function showMultiplicationTable(number) {

        for (var i = 1; i <= 10; i += 1) {
            console.log(number + " x " + i + " = " + (number * i));
        }
    }

    showMultiplicationTable(7);
    showMultiplicationTable(3.75);


//FOR LOOPS 3.
    for (var num = 1; num <= 10; num++) {

        var randomNumber = Math.floor(Math.random() * 180) + 20;

        if(randomNumber % 2 == 0) {
            console.log(randomNumber + " is even.");
        } else {
            console.log(randomNumber + " is odd.");
        }

    }

 //FOR LOOPS 4.


       for (var stair = 1; stair <= 9; stair +=1) {

    var stringNumber = stair.toString();

    var product = stringNumber.repeat(stair);
    console.log(product);
}


//FOR LOOPS 5.

       var number = 100;
    for (var i = 20; i >= 1; i--) {
        console.log(number);
        number = number - 5;

    }



        })();
