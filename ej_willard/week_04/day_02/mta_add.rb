require 'pry'
require 'rainbow'


def plan_trip (start_line, start_stop, end_stop, end_line)
  n = ["times square", "n_34th", "n_28th", "n_23rd", "union square", "n_8th"]
  puts Rainbow(n).green

  l = ["l_8th", "l_6th", "union square", "l_3rd", "l_1st"]
  puts Rainbow(l).red

  six = ["grand central", "s_33rd", "s_28th", "s_23rd", "union square", "astor place"]
  puts Rainbow(six).yellow

  if start_line == "n"
    $line1_arry = n #putting $ at front makes it a global variable.
  end
  if start_line == "l"
    $line1_arry = l #here i am storing the l_line in the var $line_arry
  end
  if start_line == (6 || "six" || "6")
    $line1_arry = six
  end
  if end_line == "n"
    $line2_arry = n #putting $ at front makes it a global variable.
  end
  if end_line == "l"
    $line2_arry = l #here i am storing the l_line in the var $line_arry
  end
  if end_line == (6 || "six" || "6")
    $line2_arry = six
  end

  def index(start_line, start_stop, end_stop, end_line)
    puts i_start = $line_arry.index(start_stop)
    puts i_end = $line_arry.index(end_stop)
    puts s_line = $line1_arry.index(start_line)
    puts e_line = $line2_arry.index(end_line)

    ##need to add conditional to make it change lines - finish this
      change_trains = is_line != e_line
      i_start.index("union square")
    end

      if i_start > i_end
        result = $line_arry[i_end +1..i_start].reverse #here have to also reverse the range we are looking at because 4..2 can't be a range but 2..4 is valid range
      else
        result = $line_arry[i_start..i_end -1]
      end
  end

  indexresult = index("n","n_8th", "l_3rd", "l").join(', ') #calling func here and storing result in var.


  #printing out input
  puts Rainbow("Your journey starts on the #{line} at #{start_stop}. You will then travel though the following stops: #{indexresult}, before you get off the #{line} at #{end_stop}").cyan
end

result = plan_trip("n", "n_8th", "l_3rd", "l")
