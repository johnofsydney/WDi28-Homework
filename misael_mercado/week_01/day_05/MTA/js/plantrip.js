// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

//train lines object

const trainLines = {
  "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L": ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

// "6", "Grand Central", "N", "8th"
//Check if the line number is valid and inside the object

const isValidLine = function(lineNum) {
  if (trainLines[lineNum] === undefined) {
    return false;
  }
  return true;
}

//check if the stop is inside the line number

const isValidStop = function(stop, lineNum) {
  if (trainLines[lineNum].indexOf(stop) === -1) {
    return false;
  }
  return true;
};

//check if the stops are in the same line
const isSameLine = function(startLine, endLine) {
  if (startLine === endLine) {
    return true;
  }
  return false;
};

//check the direction of the train
const isLeftToRight = function(startStop, endStop, lineNum) {
  if (trainLines[lineNum].indexOf(startStop) <= trainLines[lineNum].indexOf(endStop)) {
    return true;
  }
  return false;
};

//stops we neeed to travel to get to destination
const stops = function(startStop, endStop, lineNum) {
  let myStops = [];

  //if direction is left to right push array of consecutive stops
  if (isLeftToRight(startStop, endStop, lineNum) === true) {
    for (var i = trainLines[lineNum].indexOf(startStop); i <= trainLines[lineNum].indexOf(endStop); i++) {
      myStops.push(trainLines[lineNum][i]);
    }

    //if direction is right to left push array of consecutive stops the opposite way
  } else {
    for (var j = trainLines[lineNum].indexOf(startStop); j >= trainLines[lineNum].indexOf(endStop); j--) {
      myStops.push(trainLines[lineNum][j]);
    }
  }

  return myStops;
};

const planTrip = function(startingLineNum, startingStop, endingLineNum, endingStop){


  const changeStop = "Union Square";

  // if the lines are invalid, print out the message
  if (isValidLine(startingLineNum) === false || isValidLine(endingLineNum) === false){
    console.log("The line is invalid. Please choose a valid line.");
  }

  // if stops are invalid, print out the message
  else if (isValidStop(startingStop, startingLineNum) === false || isValidStop(endingStop, endingLineNum) === false ){
    console.log("The stop is not valid. Please try again!.");

  } else {

    // if the stops we get on and off are in the same line, print out the message
    if (isSameLine(startingLineNum, endingLineNum) === true){
      console.log(`You can reach ${endingStop} from ${startingStop} directly by catching line ${startingLineNum}`);
    }

    else {

      // get the index of the stop "Union Square" in the train line that we want to get on
      const startUnionSquareIndex = trainLines[startingLineNum].indexOf(changeStop);

      // get the index of the stop "Union Square" in the train line that we want to get off
      const endUnionSquareIndex = trainLines[endingLineNum].indexOf(changeStop);

      // printing out the messages to the console
      console.log(`You must travel through the following stops on the ${startingLineNum} line: ${stops(startingStop, trainLines[startingLineNum][startUnionSquareIndex], startingLineNum).join(" --> ")}`);
      console.log(`Change at ${changeStop}`);
      console.log(`Your journey continues through the following stops:  ${stops(trainLines[endingLineNum][endUnionSquareIndex], endingStop, endingLineNum).join(" --> ")} on the ${endingLineNum} line`);
      console.log(`${stops(trainLines[endingLineNum][endUnionSquareIndex], endingStop, endingLineNum).length + stops(startingStop, trainLines[startingLineNum][startUnionSquareIndex], startingLineNum).length - 1 } stops in total.`);
    }
  }
};

// "L", "1st", "6",  just cheking line logic

planTrip("L", "1st", "6", "28th");
planTrip("6", "Astor Place", "N", "34th");
planTrip("L", "23rd", "N", "Times Square");
planTrip("6", "Grand Central", "N", "8th");
planTrip("1", "12th", "N", "8th");
