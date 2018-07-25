require 'pry'

@trains = {

 "N" => ["Times Square", "34th", "N28th", "N23rd", "Union Square", "N8th"],
 "6" => ["Grand Central", "33rd", "628th", "623rd", "Union Square", "Astor Place"],
 "L" => ["L8th", "6th", "Union Square", "3rd", "1st"]

}

def two_lines first_stop, line_1, last_stop, line_2
  if line_1 == line_2 #if travelling on the same line
    start_index = @trains[line_1].index(first_stop)
    last_index = @trains[line_1].index(last_stop)

    if start_index > last_index #if travelling right to left
      journey = @trains[line_1][last_index..start_index-1].reverse
    else
      journey = @trains[line_1][start_index+1..last_index]
    end

    puts "You must travel through the following stops on the #{line_1} line: #{journey.join(", ")}"
    puts "The total number of stops is #{journey.length}"

#how to handle non-existent stations?

  else #line_1 != line_2
    start_index = @trains[line_1].index(first_stop)
    interchange_index = @trains[line_1].index("Union Square")
    last_index = @trains[line_2].index(last_stop)

    if start index > interchange_index
      journey_1 = @trains[line_1][interchange_index..start_index-1].reverse
      journey_2 = @trains[line_2][last_index+1..interchange_index]

    else #if start_index < interchange_index

      journey_1 = @trains[line_1][start_index+1..interchange_index]
      journey_2 = @trains[line_2][interchange_index+1..last_index]

      puts "You must travel through the following stops on the #{line_1} line: #{journey_1.join(", ")}" #joining strings together to form one string separated by commas

      puts "Change at Union Square"

      puts "Your journey continues on the #{line_2} line with the following stops: #{journey_2.join(", ")}"

      puts "The total number of stops is #{journey_1.length + journey_2.length}"

    end
  end
end

  binding.pry

# two_lines "N8th", "N", "Times Square", "N"
