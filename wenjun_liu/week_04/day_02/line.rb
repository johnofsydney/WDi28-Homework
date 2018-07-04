class Line
  def initialize(name, stations)
    @name = name
    @stations = stations
  end

  def check_line(line)
    @name == line
  end

  def stations
    @stations
  end

  def find_station_index(station_name)
    @stations.each do |s|
      if s.name == station_name
          return @stations.index(s)
      end
    end
  end

  def make_trip(station_from, station_to)
    from_index = @stations.index{|s|s.name == station_from.name}
    to_index = @stations.index{|s|s.name == station_to.name}
    reverse = from_index > to_index
    if reverse
      from_index, to_index = to_index, from_index
    end
    trip = @stations[from_index..to_index]
    reverse ? trip.reverse : trip;
  end
end
