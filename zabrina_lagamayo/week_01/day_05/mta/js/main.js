// // Objectives:
// // Apply your knowledge of Javascript to solve a real world problem.
// // Get really good at array manipulation.
// // Activity
// // Create a program that models a simple subway system.
// //
// // The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and
// // prints the journey and the total number of stops for the trip in the console:
//
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example,
// this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.


const nLine = ['Time Square' , "34th", "28th", "23rd" , "Union Square", "8th"];
const lLine = ["8th" , "6th", "Union Square", "3rd" , "1st"];
const sixLine = ["33rd" , "28th" , "23rd" , "Union Square" , "Astor Place"];

const planTrip = function (lineA , getOn, lineB, getOff) {
  let line;
  let endLine;
  if (lineA === "N"){
     line = nLine;
  } else if (lineA ==="L") {
    line = lLine;
  } else {
    line = sixLine;
  }

  if (lineB === "N"){
    endLine = nLine;
  } else if (lineB ==="L") {
    endLine = lLine;
  } else {
    endLine = sixLine;
  }

  let stops;
  let travel;
  let nextTravel
  const location = line.indexOf(getOn);
  const destination = endLine.indexOf(getOff);
  if(line === endLine) {
  stops = location - destination;
  const currentStops = endLine.slice(location, destination);
  console.log(`You must travel through the following stops on the ${lineA}: ${currentStops}`);
  }
  else {
    const changeLine = line.indexOf('Union Square');
    if (location < changeLine) {
       travel = line.slice(location+1, changeLine+1);
    }else  {
      travel = line.slice(changeLine, location);
    }
    const nextLine = endLine.indexOf('Union Square');
    if (nextLine < destination) {
      nextTravel = endLine.slice(nextLine+1, destination+1);
    } else {
      nextTravel = endLine.slice(destination, nextLine);
    }
    stops = Math.abs(location - changeLine) + Math.abs(nextLine - destination);
    console.log(`You must travel through the following stops on the ${lineA}: ${travel}`);
    console.log(`Change at Union Square.`);
    console.log (`Your journey continues through the following stops: ${nextTravel}`);
  }
  console.log(`${stops} stops in total.`)
};
