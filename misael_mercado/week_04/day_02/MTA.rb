#
# Objectives:
# Apply your knowledge of Ruby to solve a real world problem.
# Get really good at array manipulation.
# Activity
#
# Create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at, and the line and stop that user is getting off at, and prints the journey and the total number of stops for the trip in the console:
#
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
# Work out how you would do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index)
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
require 'pry'
require 'rainbow'
# Train lines as a hash
TRAIN_LINES = {
  :N => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  :L => ['8th', '6th', 'Union Square', '3rd', '1st'],
  6.to_s.to_sym =>  ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}
# .freeze
# we can use freeze to create inmutable constants

def prompt(message)
  print Rainbow(message).green
  gets.chomp.split.map(&:capitalize).join(' ')
end

# check if the stops are in the same line
def is_same_line(start_line, end_line)
  start_line == end_line
end

# check if the stop is on the left side of "Union Square" in the given line
def is_left_to_union(line, on_stop, changing_stop)
  line.index(on_stop) <= line.index(changing_stop)
end

# getting stops the user needs to travel
def getting_stops(start_line, on_stop, end_line, off_stop)
  stops = []

  if is_same_line(start_line, end_line)
    exit if start_line.index(on_stop) == start_line.index(off_stop)

    stops << (start_line[start_line.index(on_stop)..start_line.index(off_stop)])
    "you have to travel through: #{stops.join(' -> ')}"

  else
    if is_left_to_union(start_line, on_stop, 'Union Square')
      stops << start_line[start_line.index(on_stop)..start_line.index('Union Square')]

    else
      stops << start_line[start_line.index('Union Square')..start_line.index(on_stop)].reverse
    end

    if is_left_to_union(end_line, off_stop, 'Union Square')
      stops << end_line[end_line.index(off_stop)..end_line.index('Union Square')].reverse

    else
      stops << end_line[end_line.index('Union Square')..end_line.index(off_stop)]
    end

    # delete "Union Square" from stops[1] as it is duplicate with stops[0]
    stops[1].shift

    puts Rainbow("You have to travel through:").aqua + Rainbow("#{stops[0].join(' -> ')}").gold + Rainbow("\n Change at:").aqua + Rainbow(" Union Square\n").gold + Rainbow(" Your travel continues through:").aqua + Rainbow("#{stops[1].join(' -> ')}").gold + Rainbow("\n The total number of stops you have to travel is:").aqua + Rainbow(" #{stops.flatten.length}").gold
  end
end

# getting the user's input
def my_trip
  trip = []

  start_line = prompt('Please choose a subway line to get on (N L 6): ')
  puts Rainbow("You have selected line ").silver + Rainbow(start_line).gold

  on_stop = prompt('Please choose a stop to get on: ')

  end_line = prompt('Please choose a subway line to get off (N L 6): ')
  puts Rainbow("You have selected line ").silver + Rainbow(end_line).gold

  off_stop = prompt('Please choose a stop to get off: ')

  trip << start_line << on_stop << end_line << off_stop
  trip
end

mta = my_trip

# if the lines user entered do not exist, prompt error message
puts Rainbow('Line does not exist!').red unless TRAIN_LINES.key?(mta[0].to_sym)
puts Rainbow('Line does not exist!').red unless TRAIN_LINES.key?(mta[2].to_sym)

# if the stops user entered do not exist, prompt error message
puts Rainbow('Stop does not exist!').red unless TRAIN_LINES[mta[0].to_sym].include?(mta[1])
puts Rainbow('Stop does not exist!').red unless TRAIN_LINES[mta[2].to_sym].include?(mta[3])

# otherwise, we will tell the user the stops he need to travel
puts ( getting_stops (TRAIN_LINES[mta[0].to_sym]), mta[1], TRAIN_LINES[mta[2].to_sym], mta[3])

binding.pry
