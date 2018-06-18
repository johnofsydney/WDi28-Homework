console.log("Connected");
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

//
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

const nLine = [
  {name: "Times Square", interchange: false },
  {name: "34th", interchange: false},
  {name: "28th" , interchange: false},
  {name: "23rd", interchange: false},
  {name: "Union Square", interchange: true},
  {name: "8th", interchange: false},
]

const lLine = [
  {name:"8th" , interchange:false },
  {name:"6th" , interchange:false },
  {name:"Union Square" , interchange:true },
  {name:"3rd" , interchange: false},
  {name:"1st" , interchange: false},
]

const sixLine = [
  {name:"Grand Central" , interchange:false },
  {name:"33rd" , interchange:false },
  {name:"28th" , interchange:false },
  {name:"23rd" , interchange:false},
  {name:"Union Square" , interchange:true },
  {name:"Astor Place" , interchange:false },

]
let printPoint = "";
const trip = [];
const planTrip = function (startLine, stop, endLine, endStop) {
  for (let i = 0; i < nLine.length ; i++) {
    if (stop = nLine[i].name) {
      console.log("The start line begins here! at " + nLine[i].name);
      printPoint = nLine.findIndex(stop); 
      break;
    }
  }
    for (i = printPoint ; i < nLine.length; i++) {
      trip.push(nLine[i].name);
    }
    console.log("These are the lines you are going to stop at: ");
    for (var i = 0; i < trip.length; i++) {
      console.log(trip[i])
  }
}

planTrip("N", "Times Square", ",", ",");
