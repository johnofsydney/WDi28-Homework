// console.log('hello world');
//
// MTA Lab
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

const getInterchanges = function ( stops ) { //expects array of stops
  let interchanges = [];
  //console.log( stops );
  for ( let i = 0; i < stops.length; i++) {
    //console.log(stops[i].isInterchange);
    if (stops[i].isInterchange) {
      interchanges.push( stops[i].name );
      //console.log('adding',stops[i].name);
    }
  }
  //console.log ( interchanges );
  return interchanges; //array of interchanges
}


const network = {
  lines: [
    {
      name: 'N',
      stops: [
        { name: 'Times Square',   isInterchange: false },
        { name: '34th',           isInterchange: false },
        { name: '28th',           isInterchange: false },
        { name: '23rd',           isInterchange: false },
        { name: 'Union Square',   isInterchange: true  },
        { name: '8th',            isInterchange: false }
      ],
      getInterchanges: function () { return getInterchanges(this.stops);} // array of interchanges
    },
    {
      name: 'L',
      stops: [
        { name: '8th',            isInterchange: false },
        { name: '6th',            isInterchange: false },
        { name: 'Union Square',   isInterchange: true  },
        { name: '3rd',            isInterchange: false },
        { name: '1st',            isInterchange: false }
      ],
      getInterchanges: function () { return getInterchanges(this.stops);} // array of interchanges
    },
    {
      name: '6',
      stops: [
        { name: 'Grand Central',  isInterchange: false },
        { name: '33rd',           isInterchange: false },
        { name: '28th',           isInterchange: false },
        { name: '23rd',           isInterchange: false },
        { name: 'Union Square',   isInterchange: true  },
        { name: 'Astor Place',    isInterchange: false }
      ],
      getInterchanges: function () { return getInterchanges(this.stops);} // array of interchanges
    }
  ],
  getLine: function (lineName) {
    for ( i = 0; i < this.lines.length; i++ ) {
      if ( this.lines[i].name === lineName )
        return this.lines[i];
    }
  },

  findRouteToInterchange: function (fromStop, interchange, line) {
    // set up path variables
    let route = []
    let recordStops = false;

    // find stops to interchange for fromLine
    for ( let i = 0; i < line.stops.length; i++ ) {
      const stopName = line.stops[i].name

      //start or stop recording stations on either the from stop or the interChange
      if ( recordStops == false && (stopName === fromStop || stopName === interchange ) ) {
        firstStop = stopName;
        recordStops = true;
        //console.log( 'recording stops on:',recordStops);
      }

      if ( recordStops ) { // recording stops only when enabled
        // logic makes sure stops are in the right order, with the interchange being last.
        if ( route[ route.length - 1 ] === interchange) {
          route.unshift( stopName );
        } else {
          route.push( stopName );
        }
      }

      if ( recordStops == true && stopName !== firstStop && (stopName === fromStop || stopName === interchange ) ) {
        recordStops = false;
        route.pop();
        break;
        //console.log( 'recording stops on:',recordStops);
      }
    }

    return route;
  }
}


const planTrip = function (fromLine, fromStop, toLine, toStop) {
  // get our lines from the network
  const fromLineNetwork = network.getLine( fromLine.trim() );
  const toLineNetwork = network.getLine( toLine.trim() );

  // get all possible interchanges for each line
  const fromLineInterchanges = fromLineNetwork.getInterchanges();
  const toLineInterchanges = toLineNetwork.getInterchanges();

  console.log( 'fromInterchange',fromLineInterchanges );
  console.log( 'toInterchange',toLineInterchanges );
  // loop through interchanges and store the first interchange in common between lines.
  let useInterchange;

  for ( let i = 0; i < fromLineInterchanges.length; i++ ) {
    if ( toLineInterchanges.includes( fromLineInterchanges[i] ) ) {
      useInterchange = fromLineInterchanges[i];
      break;
    }
  }

  console.log('using interchange:',useInterchange)


  fromLineRoute = network.findRouteToInterchange( fromStop, useInterchange, fromLineNetwork );
  toLineRoute = network.findRouteToInterchange( toStop, useInterchange, toLineNetwork );
  toLineRoute = toLineRoute.reverse(); // reverse the to line route to get the route FROM the interchange
  const totalStops = fromLineRoute.length + toLineRoute.length + 1
  // console.log() shows output similar to this:
  // // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
  // // "Change at Union Square."
  // // "Your journey continues through the following stops: 23rd, 28th, 33rd."
  // // "7 stops in total."

  console.log( `You must travel through the following stops on the ${ fromLine } line: ${ fromLineRoute.join(', ')}.`);
  console.log( 'Change at', useInterchange );
  console.log( `Your journet continues through the following stops: ${ toLineRoute.join(', ') }.`);
  console.log( totalStops, 'stops in total');

};
