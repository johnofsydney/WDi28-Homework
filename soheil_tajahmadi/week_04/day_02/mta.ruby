require 'pry'

SUBWAY = {
  'N' => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  'L' => [ "8th", "6th", "Union Square", "3rd", "1st"],
  '6' => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

# print SUBWAY

# binding.pry

def same_line(line,start,stop)
  start_index = SUBWAY[line].index(start)
  stop_index = SUBWAY[line].index(stop)

  if start_index < stop_index
    trip = SUBWAY[line][start_index+1..stop_index]
  else
    trip = SUBWAY[line][stop_index..start_index-1].reverse
  end
  # puts trip
  return trip
end


def plan_trip (line1,start,line2,stop)
  second_trip=[]

  if line1 == line2
    first_trip = same_line(line1,start, stop)
  else
    first_trip = same_line(line1,start, "Union Square" )
    second_trip = same_line(line2,"Union Square",stop)
  end

  puts "You must travel through the following stops on the #{line1} line: #{first_trip.join(", ")}"
  if line1 != line2
    puts "Change at Union Square."
    puts "Your journey continues through the following stops on #{line2}: #{second_trip.join(", ")}"
  end
  puts "#{first_trip.length + second_trip.length} stops in total."

end

# binding.pry
puts "trip : 'N','23rd','N','34th'"
plan_trip('N','23rd','N','34th')
puts "="*90
puts "trip : 'N','34th','L','1st'"
plan_trip('N','34th','L','1st')
puts "="*90
puts "trip : 'L','8th','6','28th'"
plan_trip('L','8th','6','28th')
puts "="*90
puts "trip : '6','33rd','N','Times Square'"
plan_trip('6','33rd','N','Times Square')
puts "="*90
