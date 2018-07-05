require 'pry'

  LineN ['times square', '34th', '28th', '23rd', 'union square', '8th']
  LineL ['8th', '6th', 'union square', '3rd', '1st']
  Line6 ['grand central', '33rd', '28th', '23rd', 'union square', 'astor place']


def amount_stop_same_line (num1, num2)
  if num1 > num2
    return (num1 - num2) - 1
  else
    return (num2 - num1) - 1
  end
end

def amount_stop_to_change (num1, num2)
  if num1 > num2
    return (num1 - num2)
   else
    return (num2 - num1)
  end
end

def plan_trip()


  start = line1.index(stop1)

    puts "#{start}start"
  finish = line2.index(stop2)
  puts "#{finish}finish"
  stop_change = line1.index('union square')
  stop_change2 = line2.index('union square')
  stops_between = amount_stop_same_line(start, finish)
    puts (stops_between+2)
  stops_to_linechange = amount_stop_to_change(start, stop_change)
  stops_to_linechange2 = amount_stop_same_line(stop_change2, finish)
  totalStops = 0
  stopArr = []
  stopArr2 = []

  if (start < 0 || finish < 0)
    puts 'Sorry stop does not exist'
  end
  #for same line
  if (line1 == line2)
    i = 1
    until i == (stops_between+2)
      if (start < finish)
        stopArr.push(line1[start + i])
      else
        stopArr.push(line1[start - i])
      end
      i += 1
    end
    totalStops += (stops_between + 1)
    puts "#{stopArr}"
    puts("You must travel through the following stops: #{stopArr.join(", ")}")
    puts("there are #{totalStops} stops")
#different lines
  else
    i = 1
    until i == (stops_to_linechange+1)
      if (start < stop_change)
        stopArr.push(line1[start + i])
      else
        stopArr.push(line1[start - i])
      end
      i += 1
    end
    totalStops += stops_to_linechange
    puts("You must travel through the following stops: #{stopArr.join(", ")} ")
    puts("change lines at Union Square to #{line2}")
    # // get to last stop
    # //line2.indexChange2
    i = 1
    until i == (stops_to_linechange2+2)
      if (finish < stop_change2)
        stopArr2.push(line2[stop_change2 - i])
      else
        stopArr2.push(line2[stop_change2 + i])
      end
      i += 1
    end
    totalStops += stops_to_linechange2
    puts("Your journey continues through the following stops: #{stopArr2.join(", ")}")
    puts("there are #{totalStops + 1} stops")
  end
end
binding.pry
