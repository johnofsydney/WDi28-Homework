console.log("MTA Lab");

// create array object for all the lines
// create an empty array in push new array into the plan trip
// find the first stop in the objects arrays
// check if change line required (union square)
// get the use slice and splice to remove unwanted stops and push in to the new array
// calculate the new array length for totla stops required

//flow chart :
// check input of start and end on each arrays
// check if they are in a same arrays
// yes, print from start stop to end, no changes of station required
// no, print out from start to Union Square stops,
// print union quare stops to perform interchange
// print from Union square stops to end tops for final trip
// join those in an array and count the array length as total stops required.



const LineN = ['N', 'Time Square', '34th', '28th', '23rd', 'Union Square', '8th']
const LineL = ['L','8th', '6th', 'Union Square', '3rd', '1st']
const Line6 = ['6','Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']


// find index of the
const plantTrip = function (line1, start, line2, end) {

const startPoint = line1.indexOf(start)
const endPoint = line2.indexOf(end)

//check if line1 === line2 ; if same no changes, if diff change line needed.
  if (line1 === line2) {
    let changeRequired = true; {
      else {
        return false;
      }
    }
  } if (changeRequired === false) {
    
  }
};

// change not required, print from start to end station and count stops; add count to start and end station.
// change required, print line freom start to find UnionSquare stops; add count from start to unionsquare
// print union square as station to changes;
// print from line2 union square to stop station. add count from UnionSquare to end
//calculate total stops.



//  console.log( "You must trabel throught the following stops on the ");
//  console.log("Change at Union Square");
//  console.log('Your journey continue through the following stops:' );
 //console.log(" stops in total");




planTrip('N', 'Times Square', '6', '33rd');
