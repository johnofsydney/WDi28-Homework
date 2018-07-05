# Create a program that models a simple subway system.
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console

# plan_trip 'N', 'Times Square', '6', '33rd'

# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."

require 'pry'

@trains = {

 "N" => ["Times Square", "34th", "N28th", "N23rd", "Union Square", "N8th"],
 "6" => ["Grand Central", "33rd", "628th", "623rd", "Union Square", "Astor Place"],
 "L" => ["L8th", "6th", "Union Square", "3rd", "1st"]

}

def one_line (line, first_stop, last_stop) #defining a one_line function for same line journeys which we can call later in the two_line scenario

#get index first stop and last stop in array based on which line the stop is one

  start_index = @trains[line].index(first_stop)
  last_index = @trains[line].index(last_stop)

  # puts start_index
  # puts last_index

#conditions for when a journey goes forward or backwards on the line

  if start_index > last_index  #if moving left on the array /backwards .reverse so that program lists the stops in ORDER from start to end of journey and is NOT inclusive of the first alighting stop
    journey = @trains[line][last_index..start_index-1].reverse
  else
    journey = @trains[line][start_index+1..last_index] #if moving right on the right /forward
  end #ending if statement

 return journey #returning a value so we can use the value in the below two_lines function

end #ending def

def two_lines (line_1, first_stop, line_2, last_stop)
  journey_2 = [] #defining local variable journey_2 as empty so that we can assign a value later on

  if line_1 == line_2 #if on the same line run the above function here

    journey_1 = one_line(line_1, first_stop, last_stop)

      puts "You must travel through the following stops on the #{line_1} line: #{journey_1.join(", ")}"
      puts "The total number of stops is #{journey_1.length}" #getting the number of stops from the new array by using .length

  else #if line_1 != line_2
    journey_1 = one_line(line_1, first_stop, "Union Square") #first part of the journey starting at user defined first_stop and stopping at interchange "union square"
    journey_2 = one_line(line_2, "Union Square", last_stop) #second part of journey starting at interchange "union square" and ending at user defined last_stop
#Union square is common across ALL lines so we can use it as an argument

      puts "You must travel through the following stops on the #{line_1} line: #{journey_1.join(", ")}" #joining strings together to form one string separated by commas

      puts "Change at Union Square"

      puts "Your journey continues on the #{line_2} line with the following stops: #{journey_2.join(", ")}"

      puts "The total number of stops is #{journey_1.length + journey_2.length}"
  end
end

# puts "What is your first line? :"
# line_1 = gets.chomp.to_s
#
# puts "What is your starting station? :"
# first_stop = gets.chomp.to_s
#
# puts "What is your second line? :"
# line_2 = gets.chomp.to_s
#
# puts "What is your destination? :"
# last_stop = gets.chomp.to_s
#
# two_lines

binding.pry
# testing
#
# "N" => ["Times Square", "34th", "N28th", "N23rd", "Union Square", "N8th"],
# "6" => ["Grand Central", "33rd", "628th", "623rd", "Union Square", "Astor Place"],
# "L" => ["L8th", "6th", "Union Square", "3rd", "1st"]
#
# two_lines("N", "N8th", "6", "Grand Central") intersection, two lines and reversed
# two_lines("6","Grand Central","L","1st") intersection, two lines and not reversed
# two_lines("L","L8th","L","1st") no intersection, one line and not reversed
# two_lines("6", "Astor Place","6","Grand Central") no intersection, one line and reversed
