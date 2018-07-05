require 'pry'

# MTA Lab
# Objectives:
# Apply your knowledge of Ruby to solve a real world problem.
# Get really good at array manipulation.
# Activity
# Create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
# Work out how you wtould do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index)
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)



@train_line = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}


p "There are 3 subway lines:"
p 'The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th'
p 'The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st'
p 'The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.'

print "Which line are you departing : "
line_start = gets.chomp
print "Which stop are you departing : "
start = gets.chomp
print "Which line are you arriving : "
line_stop = gets.chomp
print "Which stop are you arriving : "
stop = gets.chomp

def plan_trip (line_start, start, line_stop, stop)
  start_stop = @train_line[line_start].index start
  union_line_start = @train_line[line_start].index("Union Square")
  end_stop = @train_line[line_stop].index stop
  union_line_stop = @train_line[line_stop].index("Union Square")

  #check if line change required. If no run this
  if line_start == line_stop
    new_trip = @train_line[line_start][start_stop..end_stop]
    total_stop = new_trip.length

    puts "You must travel through the following stops on the #{line_start} line: #{new_trip}"
    puts "#{total_stop} stops in total."

   elsif line_start != line_stop
     # check start of the line to union Square
    first_trip = @train_line[line_start][start_stop..union_line_start]
    first_trip_print = @train_line[line_start][start_stop..union_line_start].join ', '
    first_trip_length = first_trip.length
     # check union square to end stops
      if union_line_stop < end_stop
        second_trip = @train_line[line_stop][union_line_stop..end_stop]
        second_trip_print = @train_line[line_stop][union_line_stop..end_stop].join ', '

      elsif union_line_stop > end_stop
        # reverse_second_line = line_stop.reverse
        second_trip = @train_line[line_stop][end_stop..union_line_stop].reverse
        second_trip_print = @train_line[line_stop][end_stop..union_line_stop].reverse.join ', '
      end

     total_stop = first_trip.length + second_trip.length - 1
     puts "You must travel through the following stops on the #{line_start} line: #{first_trip_print}"
     puts "Chnage at Union Square"
     puts "Your journey continues through the following stops: #{second_trip_print}"
     puts "#{total_stop} stops in total."

  end

end
print plan_trip line_start, start, line_stop, stop
