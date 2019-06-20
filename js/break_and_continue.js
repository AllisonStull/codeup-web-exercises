"use strict";

(function () {



    var numberPicked;
    do {
        numberPicked = Number(prompt("Pick an odd number between 1 and 50"));
        if (numberPicked % 2 === 0)
            alert(numberPicked + " is not odd, please pick again")
        else if (numberPicked < 1 || numberPicked > 50)
            alert(numberPicked + " is not between 1 and 50, please pick again");
        else if (isNaN(numberPicked))
            alert(numberPicked + " is not a number, please pick again");
        else {
            alert("congrats you picked the right number");
            break;
        }
    } while (true)

})();