# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

require 'rainbow'

def calc_option
  puts "Trip Calculator"
  puts "*" * 80
  puts Rainbow("[t] - Calculate Trip Time").aqua
  puts Rainbow("[c] - Calculate Trip Cost").green
  puts Rainbow("[q] - Quit Menu").red
  print Rainbow("Please enter your choice: ").yellow
end

calc_option
calc_choice= gets.chomp.downcase

#calculate trip cost function
def trip_cost(distance, miles_per_gal, price_per_gal)
  result = (((distance.to_f / 100) * miles_per_gal) * price_per_gal)
  return result
end

#calculate trip time function
def trip_time(distance, speed)
  result = (distance / speed)
  return result
end

#conditional......
until calc_choice == 'q'
  case calc_choice
  when "c"
    print Rainbow("Please enter trip distance in miles: ").red
    distance = gets.to_i
    print Rainbow("Please enter how many miles per gallon of gas your car travels: ").red
    miles_per_gal = gets.to_i
    print Rainbow("Please enter the price you paid per gallon of gas: ").red
    price_per_gal = gets.to_f
    result = trip_cost(distance, miles_per_gal, price_per_gal)

    puts Rainbow("The cost of your #{distance} mile trip, based on your car's fuel consumption of #{miles_per_gal} miles per gallon at a cost of $#{price_per_gal} is is $#{result.round(2)}.").aqua
    calc_option
    calc_choice = gets.chomp.downcase

  when "t"
    print Rainbow("Please enter trip distance in miles: ").red
    distance = gets.to_f
    print Rainbow("Please enter your speed in miles: ").red
    speed = gets.to_f
    result = trip_time(distance, speed)
    puts Rainbow("If you are making a #{distance} mile long trip and traveling at a speed of approximately #{speed} miles per hour you should reach your destination in #{result.round(0) } hour(s).").aqua

    calc_option
    calc_choice = gets.chomp.downcase
  end
end
