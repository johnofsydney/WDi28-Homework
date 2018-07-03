

require 'pry'



## DATA for MTA
MTA = {
  "N" => ["Times Square","34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

INTERCHANGE = "Union Square"

def plan_trip ( from_line, from_station, to_line, to_station )
  # get stations from fromStation to Interchange
  from_trip = MTA[from_line]

  start_stop =  from_trip.find_index from_station
  from_interchange = from_trip.find_index INTERCHANGE

  # get stations from Interchange to toStation
  to_trip = MTA[to_line]

  final_stop = to_trip.find_index to_station
  to_interchange = to_trip.find_index INTERCHANGE

  first_stage = start_stop < from_interchange ? from_trip[start_stop...from_interchange] : from_trip[from_interchange..start_stop].reverse.pop

  second_stage = to_interchange < final_stop ? to_trip[to_interchange..final_stop].shift : to_trip[final_stop...to_interchange].reverse
  
  puts "You must travel through the following stops on the #{from_line}: #{first_stage.join ', '}"
  puts "Change at #{INTERCHANGE}"
  puts "Your journey continues thorugh the following stops: #{second_stage.join ', '}"
  puts "#{ (first_stage + second_stage).length } in total."
end


# pry

plan_trip '6', '33rd','N', 'Times Square'

plan_trip 'N', 'Times Square','6', '33rd'

pry
