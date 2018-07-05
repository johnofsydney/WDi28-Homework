require 'pry'
# require 'rainbow'
require './mta'

def get_from_line
  puts "|\n|  Please Select the line where you'll start your journey: "
  # puts each line to choose from
  MTA.keys.each do |line|
    puts "|  [#{MTA.keys.find_index(line) +1}] #{line}"
  end
  print "|  Start line number: "
  line_num = gets.to_i - 1

  # check if input was valid and ask again if not
  if line_num < 0 || line_num >= MTA.keys.length
    puts "Whoops, that's not a valid Line!"
    from_line = get_from_line
  else
    from_line = MTA.keys[ line_num ]
  end

  from_line
end

def get_from_station from_line
  puts "|\n|  Please Select the station where you'll start your journey: "
  # puts each station to choose from
  MTA[from_line].each do |station|
    puts "|  [#{MTA[from_line].find_index(station) +1}] #{station}"
  end
  print "|  Station Number: "
  station_num = gets.to_i - 1

  # check if input was valid and ask again if not
  if station_num < 0 || station_num >= MTA[from_line].length
    puts "Whoops! That's not a valid station!"
    from_station = get_from_station from_line
  else 
    from_station = MTA[from_line][ station_num ]
  end

  from_station
end

def get_to_line
  puts "|\n|  Please Select the line where you'll finish your journey: "
  # puts each line to choose from
  MTA.keys.each do |line|
    puts "|  [#{MTA.keys.find_index(line) +1}] #{line}"
  end
  
  print "|  Finish line number: "
  line_num = gets.to_i - 1

  # check if input was valid and ask again if not
  if line_num < 0 || line_num >= MTA.keys.length
    puts "Whoops! That's not a valid line!"
    to_line = get_to_line
  else
    to_line = MTA.keys[ line_num ]
  end

  to_line
end

def get_to_station to_line
  puts "|\n|  Please Select the station where you'll finish your journey: "
  # puts each station to choose from
  MTA[to_line].each do |station|
    puts "|  [#{MTA[to_line].find_index(station) +1}] #{station}"
  end
  print "|  Station Number: "
  station_num = gets.to_i - 1

  # check if input was valid and ask again if not
  if station_num < 0 || station_num >= MTA[to_line].length
    puts "Whoops! That's not a valid station!"
    to_station = get_to_station to_line
  else 
    to_station = MTA[to_line][ station_num ]
  end

  puts "-" * 40
  to_station
end

def show_menu 
  puts "-" * 40
  puts "|  Metro Transit Authority - Trip Planner "
  puts "-" * 40

  from_line = get_from_line  

  from_station = get_from_station from_line

  to_line = get_to_line

  to_station = get_to_station to_line
  
  plan_trip from_line, from_station, to_line, to_station

  puts "-" * 40
  print "|  Do you wish to plan another trip? [y/n] : "
  gets.chomp.downcase
end

opt = ""


until opt == "n"
  opt = show_menu
end

puts "-" * 40
puts "|  Thank you for using"
puts "|  Metro Transit Authority - Trip Planner "
puts "-" * 40

