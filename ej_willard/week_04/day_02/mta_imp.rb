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

def plan_trip (line1, start_stop, line2, end_stop)
  if line1 == "n"
    $line_arry = $n #putting $ at front makes it a global variable.
  end
  if line1 == "l"
    $line_arry = $l #here i am storing the l_line in the var $line_arry
  end
  if line1 == (6 || "six" || "6")
    $line_arry = $six
  end
  if line2 == "n"
    $line2_arry = $n #putting $ at front makes it a global variable.
  end
  if line2 == "l"
    $line2_arry = $l #here i am storing the l_line in the var $line_arry
  end
  if line2 == (6 || "six" || "6")
    $line2_arry = $six
  end

  def index (start_stop, end_stop)
    #want to say here if start stop and end stop not on same line then change at US and keep going.
    puts i_start = $line_arry.index(start_stop)
    puts i_end = $line2_arry.index(end_stop)
    if $line_arry == $line2_arry
      stops_result = $line_arry[i_start..i_end -1]
    else
      change_line = $line_arry.index("union square")
      if i_start < change_line #if start stop is smaller than US
        result = $line_arry[i_end +1..i_start].reverse #here have to also reverse the range we are looking at because 4..2 can't be a range but 2..4 is valid range
      else
        result = $line_arry[i_start..i_end -1]
      end
      next_line = $line2_arry.index("union square")
      if (next_line < i_end)
        nextline_result = $line2_arry[i_start..i_end -1]
      else nextline_result = $line2_arry[i_end +1..i_start].reverse
      end
  end

  indexresult = index("times square", "l_3rd").join(', ') #calling func here and storing result in var.


  #printing out input
  puts Rainbow("You must travel through the following stops on the #{line1} line: #{indexresult}.").cyan
  puts Rainbow("Change at Union Square.").green
  puts Rainbow ("Your journey continues through the following stops: #{nextline_result}, until you get to #{end_stop}.").red
  puts Rainbow("#{stops_result} stops in total.").yellow


# puts Rainbow ("Your journey starts on the #{line1} at #{start_stop}. You will then travel though the following stops: #{indexresult}, before you get off the #{line} at #{end_stop}").cyan #old comment before trying to rework whole thing
end


result = plan_trip("n", "times square", "l", "l_3rd")
end
