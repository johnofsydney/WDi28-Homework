class Station {
  constructor(name, interchanges){
    this.name = name;
    this.interchanges = interchanges || [];
  };

  checkInterchangeable(line){
    return this.interchanges.includes(line);
  };
};
