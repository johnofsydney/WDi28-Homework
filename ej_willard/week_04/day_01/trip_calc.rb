# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour



#NOTE COULDNT GET IT TO PRINT $$$ AMOUNT


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
  result = (((distance / 100) * miles_per_gal) * price_per_gal)
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
    trip_cost(distance, miles_per_gal, price_per_gal)

    puts Rainbow("The cost of your #{distance} mile trip, based on your car's fuel consumption of #{miles_per_gal} miles per gallon at a cost of $#{price_per_gal} is $#{result}.").aqua

    calc_option
    calc_choice = gets.chomp.downcase
  end
end
