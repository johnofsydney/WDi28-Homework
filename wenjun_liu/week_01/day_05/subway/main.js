const network = new Network({ N: new Line('N', [new Station('Times Square'),
                                                new Station('34th'),
                                                new Station('28th'),
                                                new Station('23rd'),
                                                new Station('Union Square', ['L','6']),
                                                new Station('8th')]),
                              L: new Line('L', [new Station('8th'),
                                                new Station('6th'),
                                                new Station('Union Square', ['N','6']),
                                                new Station('3rd'),
                                                new Station('1st')]),
                              6: new Line('6', [new Station('Grand Central'),
                                                new Station('33rd'),
                                                new Station('28th'),
                                                new Station('23rd'),
                                                new Station('Union Square', ['N','L']),
                                                new Station('Astor Place')])
});

const planTrip = (fromLineStr, fromStationStr, toLineStr, toStationStr) => {
  const fromLine = network.lines[fromLineStr];
  const fromStationIndex = fromLine.findStationIndex(fromStationStr);
  const toLine = network.lines[toLineStr];
  const toStationIndex = toLine.findStationIndex(toStationStr);
  const sameLine = fromLine === toLine;
  let result = [];
  let result2 = [];
  let interchange;

  if(sameLine){
    result = fromLine.makeTrip(fromLine.stations[fromStationIndex],toLine.stations[toStationIndex]);
  } else {
    for (let i=0;i<fromLine.stations.length;i++){
      if(fromLine.stations[i].checkInterchangeable(toLineStr)){
        result = fromLine.makeTrip(fromLine.stations[fromStationIndex],fromLine.stations[i]);
        interchange = fromLine.stations[i].name;
        break;
      };
    }
    result2 = toLine.makeTrip(toLine.stations[toLine.findStationIndex(interchange)],toLine.stations[toStationIndex]);
    // result2.shift();
  }

  console.log(`you must travel through the following stops on the ${fromLineStr} line: ${result.map(station => station.name)}.`)
  if(interchange){
    console.log(`Change at ${interchange}.`)
    console.log(`Your journey continues through the following stops: ${result2.map(station => station.name)}.`)
    console.log(`${result.length+result2.length} stops in total.`)
  } else {
    console.log(`${result.length} stops in total.`)
  }
};
