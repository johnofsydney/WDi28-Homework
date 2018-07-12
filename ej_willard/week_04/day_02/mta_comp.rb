require 'pry'
require 'rainbow'

def mta_menu
  puts "Plan your trip on MTA today! Please make your selections below:"
  puts "[n] - N-Line"
  puts "[l] - L-Line"
  puts "[6] - Six-Line"
  puts "[q] - Quit Trip Planner"
  print "Please select your line: "
end

mta_menu
user_input = gets.chomp.downcase #wanted to use .first as well but wouldnt chain.

def plan_trip (line, start_stop, end_stop)
  n = ["times square", "n_34th", "n_28th", "n_23rd", "union square", "n_8th"]
  puts Rainbow(n).green

  l = ["l_8th", "l_6th", "union square", "l_3rd", "l_1st"]
  puts Rainbow(l).red

  six = ["grand central", "s_33rd", "s_28th", "s_23rd", "union square", "astor place"]
  puts Rainbow(six).yellow


until user_input == 'q'
  case user_input
  when "n"
      $line_arry = n #putting $ at front makes it a global variable.
      print "What stop are you getting ON at? "
      start_st = gets.chomp.downcase
      print "What stop are you getting OFF at? "
      end_st = gets.chomp.downcase
      result = index(start_st, end_st)
    end


    if line == "l"
      $line_arry = l #here i am storing the l_line in the var $line_arry
    end
    if line == (6 || "six" || "6")
      $line_arry = six
    end

    def index (start_stop, end_stop)
      puts i_start = $line_arry.index(start_stop)
      puts i_end = $line_arry.index(end_stop)

        if i_start > i_end
          result = $line_arry[i_end +1..i_start].reverse #here have to also reverse the range we are looking at because 4..2 can't be a range but 2..4 is valid range
        else
          result = $line_arry[i_start..i_end -1]
        end
    end
end
  indexresult = index("n_8th", "n_34th").join(', ') #calling func here and storing result in var.


  #printing out input
  puts Rainbow("Your journey starts on the #{line} at #{start_stop}. You will then travel though the following stops: #{indexresult}, before you get off the #{line} at #{end_stop}").cyan
end

result = plan_trip("n", "n_8th", "n_34th")
