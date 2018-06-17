console.log("connected");

/*Exercises: Arrays
Working with Arrays
Starting with an empty array called rainbowColors:

Add "orange" to the end of the array
Add "red" to the start of the array
Add "yellow" to the end
Add "green", "blue", "indigo", and "violet" to the end of the array
Try and do this using one method
Log out the length of the array
Log out the second item
Log out the last item (make this flexible/dynamic!)
Log out the index of the string "blue"*/

let rainbowColors = []; {
  rainbowColors.push("orange") ;
  rainbowColors.unshift("red") ;
  rainbowColors.push("yellow") ;
  rainbowColors.push("blue", "indigo", "violet") ;
}
    // console.log(rainbowColors.length, [2],  [04] ); /* can't figure out how to log a dynamic item.*/

    console.log(rainbowColors.length);
    console.log(rainbowColors [2]);
    console.log(rainbowColors[ rainbowColors.length - 1]);
    console.log(rainbowColors [4]);
