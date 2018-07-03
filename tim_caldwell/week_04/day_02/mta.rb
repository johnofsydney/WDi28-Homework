## DATA for MTA
MTA = {
  "N" => ["Times Square","34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

INTERCHANGE = "Union Square"

def trip_same_line ( from_line, from_station, to_line, to_station )
  start_stop = MTA[from_line].find_index from_station
  final_stop = MTA[from_line].find_index to_station

  trip = if start_stop > final_stop
    MTA[from_line][final_stop..start_stop].reverse
  else
    MTA[from_line][start_stop..final_stop]
  end

  puts "You must travel through the following stops on the #{from_line} line:\n #{trip.join ', '}"
  puts "#{ trip.length } stops in total."
end

def trip_change_line ( from_line, from_station, to_line, to_station )
  # get stations from fromStation to Interchange
  from_trip = MTA[from_line]

  start_stop =  from_trip.find_index from_station
  from_interchange = from_trip.find_index INTERCHANGE

  # get stations from Interchange to toStation
  to_trip = MTA[to_line]

  final_stop = to_trip.find_index to_station
  to_interchange = to_trip.find_index INTERCHANGE

  first_stage = if start_stop < from_interchange
    from_trip[start_stop...from_interchange]
  else 
    from_trip[from_interchange+1..start_stop].reverse
  end

  second_stage = if to_interchange < final_stop
      to_trip[to_interchange+1..final_stop]
    else
      to_trip[final_stop...to_interchange].reverse
    end
  
  puts "You must travel through the following stops on the #{from_line} line:\n#{first_stage.join ', '}"
  puts "Change at #{INTERCHANGE}"
  puts "Your journey continues thorugh the following stops:\n#{second_stage.join ', '}"
  puts "#{ (first_stage + second_stage).length + 1 } stops in total."
end

def plan_trip ( from_line, from_station, to_line, to_station )
  if from_line == to_line
    trip_same_line from_line, from_station, to_line, to_station
  else
    trip_change_line from_line, from_station, to_line, to_station
  end
  
  
end


# pry

# plan_trip '6', '33rd','N', 'Times Square'

# plan_trip 'N', 'Times Square','6', '33rd'
