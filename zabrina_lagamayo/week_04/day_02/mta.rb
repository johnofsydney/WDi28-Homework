$nLine = ['Time Square' , '34th', '28th', 'Union Square' , '8th']

$lLine = ["8th" , "6th", "Union Square", "3rd" , "1st"]

$sixLine = ["33rd" , "28th" , "23rd" , "Union Square" , "Astor Place"]

#create function that takes 4 parameters (lineA, getOn, lineB, getOff)


def plan_trip (line_a , getOn , line_b , getOff)
  if line_a == "N"
    line = $nLine
  elsif line_a =="L"
    line = $lLine
  else
    line = $sixLine
  end

  if line_b == "N"
    end_line = $nLine
  elsif line_b =="L"
    end_line = $lLine
  else
    end_line = $sixLine
  end

  location  = line.index(getOn)
  destination = end_line.index(getOff)

if line == end_line
  stops = (location - destination).abs
  current_stops = end_line[(location+1)..(destination)]
  puts "You must travel through the following stops on the #{line_a}: #{current_stops}"
else
  change_line = line.index('Union Square')
  next_line = end_line.index('Union Square')
  if location < change_line
    travel = line[location..change_line]
  else
    travel = line[(change_line)..location].reverse
  end

  if next_line < destination
    next_travel = end_line[(next_line+1)..(destination)]
  else
    next_travel = end_line[destination..next_line-1].reverse
  end
    stops = (location - change_line).abs + (next_line - destination).abs
    puts "You must travel through the following stops on the #{line_a}: #{travel}"
    puts "Change at Union Square."
    puts "Your journey continues through the following stops: #{next_travel}"
end
    puts "#{stops} stops in total."

end

plan_trip('N' , 'Time Square' , 'N' , '8th')
