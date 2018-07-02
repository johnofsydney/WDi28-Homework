console.log("connected");
//create arrays of train station (Lines)

// const lineN = ["Times Square", "34th", "28th", "23rd", "Union Square","8th"];
// const lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
// const line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
const stations = {
  'N': ["Times Square", "34th", "28th", "23rd", "Union Square","8th"],
  'L': ["8th", "6th", "Union Square", "3rd", "1st"],
  '6': ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

let numberOfStops;

//function that prints out all the stations in between poiint A and point b, which we can use to handle other situations
const printAllStationsBetween = function(stationA, stationB, line){

  let indexOfA = stations[line].indexOf(stationA);
  let indexOfB = stations[line].indexOf(stationB);
  let stops;

  if (indexOfB>indexOfA) {
    //it means we are going forward, slice the array normal way from a to b
    stops = stations[line].slice(indexOfA+1, indexOfB+1);
  } else {
    stops = stations[line].slice(indexOfB, indexOfA);
    // console.log(stops);
    stops.reverse();
  }

  numberOfStops += stops.length;

  // console.log(stops);
  return stops;
}
//test
// console.log(printAllStationsBetween("Times Square", "23rd", 'N'));
// console.log(printAllStationsBetween("28th", "Times Square", 'N'));
//
// console.log(printAllStationsBetween("6th", "3rd", 'L'));
// console.log(printAllStationsBetween("Union Square", "8th", 'L'));
//
// console.log(printAllStationsBetween("Times Square", "23rd", line6));
// console.log(printAllStationsBetween("28th", "Times Square", line6));


//establish if the change is REquired

const planTrip = function(startLine, startStation, endLine, endStation){
  console.log(`You want to travel from ${startStation} on ${startLine} to ${endStation} on ${endLine}`)

  // reset numberOfStops to zero
  numberOfStops = 0;

  let changeRequired;

  if(startLine===endLine){
    changeRequired=false;
  }else{
    changeRequired=true;
  }
  if(changeRequired){
    //implement printAllStationsBetween function, taking arguments from planTrip passed arguments
    console.log(`You must travel through the following stops on the ${startLine} line: ${printAllStationsBetween(startStation, "Union Square", startLine)}`);
    console.log("change at Union Square");
    console.log(`Your journey continues through the following stops: ${printAllStationsBetween("Union Square", endStation, endLine)}`);
  }else{
    console.log(`You must travel through the following stops on the ${startLine} line: ${printAllStationsBetween(startStation, endStation, startLine)}. You do not need to change at all.`);
  }

  console.log(`${numberOfStops} stops in total`);
}

// Test using example in question
console.log(`****** Test using example in question *********`);
planTrip('N', 'Times Square', '6', '33rd');
// Test using trip that doesn't go to union square
console.log(`*** Test using trip that doesn't go to union square ***`);
planTrip('6', 'Grand Central', '6', '28th');

// Test using trip that goes to union square but does not change line`
console.log(`*** Test using trip that goes to union square but does not change line ***`);
planTrip("6", "Grand Central", "6", "Union Square");
// Test using trip that goes 8th to 1st and uses L line
console.log(`*** Test using trip that dgoes 8th to 1st and uses L line ***`);
planTrip("L", "8th", "L", "1st");
// Test using trip that goes 8th to 1st and uses N line
console.log(`*** Test using trip that goes 8th to 1st and uses N line ***`);
planTrip("N", "8th", "L", "1st");
