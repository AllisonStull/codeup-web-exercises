(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ['Patrick', 'Gary', 'Squidward', 'Spongebob'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("The length of the names is " + names.length +  ".");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]); // 1
    console.log(names[1]); // 2
    console.log(names[2]); // 3
    console.log(names[3]); // 4

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    var names = ['Patrick', 'Gary', 'Squidward', 'Spongebob'];

    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);

    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    var names = ['Patrick', 'Gary', 'Squidward', 'Spongebob'];
    names.forEach(function(name) {
        console.log('Here is a name: ' + name + '.');
    });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(array){
        return array [0];


    }
    function second(array){
    return array [1];


    }
    function last(array){
    return array[array.length - 1]


    }
    console.log(first(names));
    console.log(second(names));
    console.log(last(names));




})();
