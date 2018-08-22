require 'pry'
require 'rainbow'

# def mta_menu
#   puts "Plan your trip on MTA today! Please make your selections below:"
#   puts "[n] - N-Line"
#   puts "[l] - L-Line"
#   puts "[6] - Six-Line"
#   puts "[q] - Quit Trip Planner"
#   print "Please select your line: "
# end

# mta_menu
# user_input = gets.chomp.downcase #wanted to use .first as well but wouldnt chain.

  $n = ["times square", "n_34th", "n_28th", "n_23rd", "union square", "n_8th"]
  puts Rainbow($n).green

  $l = ["l_8th", "l_6th", "union square", "l_3rd", "l_1st"]
  puts Rainbow($l).red

  $six = ["grand central", "s_33rd", "s_28th", "s_23rd", "union square", "astor place"]
  puts Rainbow($six).yellow

def plan_trip (lineA, get_on, lineB, getOff)
  if lineA == "n"
    $line = $n #putting $ at front makes it a global variable.
  end
  if lineA == "l"
    $line = $l #here i am storing the l_line in the var $line_arry
  end
  if lineA == (6 || "six" || "6")
    $line = $six
  end
  if lineB == "n"
    $end_line = $n #putting $ at front makes it a global variable.
  end
  if lineB == "l"
    $end_line = $l #here i am storing the l_line in the var $line_arry
  end
  if lineB == (6 || "six" || "6")
    $end_line = $six
  end

  # def index (start_stop, end_stop)
  #   #want to say here if start stop and end stop not on same line then change at US and keep going.
  puts location = line.index(getOn)
  puts destination = end_line.index(getOff)
    if line == end_line
      stops = location - destination
      current_stops = end_line[locaton..destination -1]
      puts "You must go through the following stops on the #{lineA}: #{current_stops}."
    else
      change_line = line.index("union square")
      if (location < change_line)
        travel = line[locaton..change_line +1]
      else
        travel = line(change_line, location)
      end
      next_line = end_line.index("union square")
      if next_line < destination
        next_travel = end_line[next_line..destination +1]
      else
        next_travel = end_line[destination, next_line]
      end
      stops = (location.to_i - change_line.to_i) + (next_line.to_i - destination.to_i)
      #printing out input
      puts Rainbow("You must travel through the following stops on the #{lineA} line: #{travel}.").cyan
      puts Rainbow("Change at Union Square.").green
      puts Rainbow ("Your journey continues through the following stops: #{next_travel}, until you get to #{end_stop}.").red
      puts Rainbow("#{stops} stops in total.").yellow
    end
  end
    # indexresult = index("times square", "l_3rd").join(', ') #calling func here and storing result in var.
# end
result = plan_trip("n", "times square", "l", "l_3rd")



  #   puts i_start = $line_arry.index(start_stop)
  #   puts i_end = $line2_arry.index(end_stop)
  #   if $line_arry == $line2_arry
  #     stops_result = $line_arry[i_start..i_end -1]
  #   else
  #     change_line = $line_arry.index("union square")
  #     if i_start < change_line #if start stop is smaller than US
  #       result = $line_arry[i_end +1..i_start].reverse #here have to also reverse the range we are looking at because 4..2 can't be a range but 2..4 is valid range
  #     else
  #       result = $line_arry[i_start..i_end -1]
  #     end
  #     next_line = $line2_arry.index("union square")
  #     if (next_line < i_end)
  #       nextline_result = $line2_arry[i_start..i_end -1]
  #     else nextline_result = $line2_arry[i_end +1..i_start].reverse
  #     end
  # end







# puts Rainbow ("Your journey starts on the #{line1} at #{start_stop}. You will then travel though the following stops: #{indexresult}, before you get off the #{line} at #{end_stop}").cyan #old comment before trying to rework whole thing
# end
#
#
#
# end
