require_relative 'network'
require_relative 'line'
require_relative 'station'

NETWORK = Network.new({ "N" => Line.new('N',[Station.new("Times Square",[]),
                                             Station.new("34th",[]),
                                             Station.new("28th",[]),
                                             Station.new("23rd",[]),
                                             Station.new("Union Square",["L","6"]),
                                             Station.new("8th",[])]),
                        "L" => Line.new("L",[Station.new("8th",[]),
                                             Station.new("6th",[]),
                                             Station.new("Union Square",["N","6"]),
                                             Station.new("3rd",[]),
                                             Station.new("1st",[])]),
                        '6' => Line.new("6",[Station.new("Grand Central",[]),
                                             Station.new("33rd",[]),
                                             Station.new("28th",[]),
                                             Station.new("23rd",[]),
                                             Station.new("Union Square",["N","L"]),
                                             Station.new("Astor Place",[])])
})

def plan_trip(from_line_string, from_station_string, to_line_string, to_station_string)
  from_line = NETWORK.lines[from_line_string]
  from_station_index = from_line.find_station_index(from_station_string)
  to_line = NETWORK.lines[to_line_string]
  to_station_index = to_line.find_station_index(to_station_string)
  same_line = from_line == to_line
  interchange = false;
  if same_line
    trip_result = from_line.make_trip(from_line.stations[from_station_index], to_line.stations[to_station_index])
  else
    from_line.stations.each do |s|
      if s.check_interchangeable to_line_string
        trip_result = from_line.make_trip(from_line.stations[from_station_index], s)
        interchange = s.name
        break
      end
    end
    second_trip_result = to_line.make_trip(to_line.stations[to_line.find_station_index(interchange)],to_line.stations[to_station_index])
    second_trip_result.shift
  end
  trip_result.shift

  puts "you must travel through the following stops on the #{from_line_string} line: #{trip_result.map{|x| x.name}}."
  if interchange
    puts "Change at #{interchange}."
    puts "Your journey continues through the following stops: #{second_trip_result.map{|x| x.name}}."
    puts "#{trip_result.size + second_trip_result.size} stops in total."
  else
    puts "#{trip_result.size} stops in total."
  end
end

plan_trip 'N', 'Times Square', '6', '33rd'
