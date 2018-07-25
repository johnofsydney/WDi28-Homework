$number_of_stops = 0

$stations = {
  "N"=>["Times Square", "34th", "28th", "23rd", "Union Square","8th"],
  "L"=> ["8th", "6th", "Union Square", "3rd", "1st"],
  "6"=> ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

def plan_trip(start_line, start_station, end_line, end_station)
  puts "You want to travel from #{start_station} on #{start_line} to #{end_station} on #{end_line}"

  #  reset number_of_stops to zero
  $number_of_stops = 0

  if start_line==end_line
    change_required=false
  else
    change_required=true
  end

  if change_required
  #   implement print_all_stations_between function, taking arguments from plan_trip passed arguments
    puts "You must travel through the following stops on the #{start_line} line: #{print_all_stations_between(start_station, "Union Square", start_line)}"
    puts "change at Union Square"
    puts "Your journey continues through the following stops: #{print_all_stations_between("Union Square", end_station, end_line)}"
  else
    puts "You must travel through the following stops on the #{start_line} line: #{print_all_stations_between(start_station, end_station, start_line)}. You do not need to change at all."
  end

  puts "#{$number_of_stops} stops in total"
  puts ""
end

def print_all_stations_between(station_a, station_b, line)
  index_of_a = $stations[line].index(station_a)
  index_of_b = $stations[line].index(station_b)

  if index_of_b>index_of_a
    stops = $stations[line][index_of_a+1..index_of_b]
  else
    stops = $stations[line][index_of_b..index_of_a-1]
    stops.reverse!
  end

  $number_of_stops+=stops.size

  return stops.join(", ")
end



# Test using example in question
  puts "****** Test using example in question *********"
plan_trip 'N', 'Times Square', '6', '33rd'

# Test using trip that doesn't go to union square
puts "*** Test using trip that doesn't go to union square ***"
plan_trip '6', 'Grand Central', '6', '28th'

# Test using trip that goes to union square but does not change line`
puts "*** Test using trip that goes to union square but does not change line ***"
plan_trip "6", "Grand Central", "6", "Union Square"

# Test using trip that goes 8th to 1st and uses L line
puts "*** Test using trip that dgoes 8th to 1st and uses L line ***"
plan_trip "L", "8th", "L", "1st"

# Test using trip that goes 8th to 1st and uses N line
puts "*** Test using trip that goes 8th to 1st and uses N line ***"
plan_trip "N", "8th", "L", "1st"