"use strict";
(function () {

// EXERCISE pt.1
var i = 2;
while ( i <= 65536 ) {
    console.log(i);
    i *= 2;
}
// //************************CONES EXERCISE*********************************** }
    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;
    console.log("Starting the day with " + allCones + " cones.");

    do {
        // This expression will generate a random number between 1 and 5
        var conesWanted = Math.floor(Math.random() * 5) + 1;
        // console.log(allCones);
        if (conesWanted <= allCones) {
            allCones -= conesWanted;
            console.log(conesWanted + " cones sold...");
        } else {
            console.log("Cannot sell you " + conesWanted + " cones. I only have "+allCones+"...");
        }

    } while (allCones > 0);
    console.log("Yay! I sold them all!");

})();
//

//EXERCISE pt.2 CONES

// var allCones = Math.floor(Math.random() * 50) + 50;
//
// console.log("Starting number of cones is " + allCones + " number of cones.");
//
// do {
//     var clientsCones = Math.floor(Math.random() * 5) + 1;
//
//     if(clientsCones <= allCones) {
//         console.log("The client ordered " + clientsCones + " number of cones.");
//         allCones -= clientsCones;
//         console.log(clientsCones + " cones sold.");
//
//     } else {
//         console.log("Sorry no more cones " + clientsCones + "" );
//
//     }
//
//
//     } while(allCones > 0);
//
// console.log("GoodBye.");
//

