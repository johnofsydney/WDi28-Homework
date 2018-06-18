class Line {
  constructor(name, stations){
    this.name = name;
    this.stations = stations;
  };

  checkLine(line){
    return this.name === line;
  };

  findStationIndex(stationName){
    for (let i=0;i<this.stations.length;i++){
      if(this.stations[i].name === stationName){
        return i;
      }
    }
  };

  makeTrip(stationFrom, stationTo){
    let fromIndex = this.stations.findIndex(station => station.name === stationFrom.name);
    let toIndex = this.stations.findIndex(station => station.name === stationTo.name);
    const reverse = fromIndex > toIndex;
    if(reverse){
      [fromIndex, toIndex] = [toIndex, fromIndex];
    }
    const trip = this.stations.slice(fromIndex+1, toIndex+1);
    return reverse ? trip.reverse() : trip;
  }
};
