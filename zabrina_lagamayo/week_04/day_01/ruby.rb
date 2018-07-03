def show_menu
  puts "Calculator"
  puts "-="*40
  puts "[a] - Addition"
  puts "[b] - Subtraction "
  puts "[c] - Multiplication"
  puts "[d] - Division"
  puts "[q] - Quit"
  print "Enter your selection: "
end
  show_menu
  menu_choice = gets.chomp.downcase

  until menu_choice =='q'
    case menu_choice
    when 'a'
      print "What is your first value?"
      first_value = gets.to_i
      print "What is your second value?"
      second_value = gets.to_i
      puts "#{first_value} + #{second_value} = #{first_value + second_value}"
    when 'b'
      print "What is your first value?"
      first_value = gets.to_i
      print "What is your second value?"
      second_value = gets.to_i
      puts "#{first_value} - #{second_value} = #{first_value - second_value}"
    when 'c'
      print "What is your first value?"
      first_value = gets.to_i
      print "What is your second value?"
      second_value = gets.to_i
      puts "#{first_value} * #{second_value} = #{first_value * second_value}"
    when 'd'
      print "What is your first value?"
      first_value = gets.to_i
      print "What is your second value?"
      second_value = gets.to_i
      puts "#{first_value} / #{second_value} = #{first_value / second_value}"
    else
      puts 'invalid selection'
    end
    show_menu
    menu_choice = gets.chomp.downcase
end
puts 'Thank you for using crappy calculator.'



# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)




# Bonus  BMI

print "what is your height (m)? : "
height =gets.to_f
print "what is your weight (kg)? : "
weight = gets.to_f

bmi = (weight/height)/height

puts "Your BMI is #{bmi}"


# Bonus Trip calculator

#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour


print "How long is the distance? (miles): "
distance = gets.to_f
print "How much is the miles per gallon? : "
miles_gallon = gets.to_f
print "How much is the price per gallon? : "
price_gallon = gets.to_f
print "How much is the speed in miles per hour : "
per_hour = gets.to_f

speed = distance /per_hour

gallons = distance / miles_gallon
cost = gallons * price_gallon
puts "The trip will take #{speed}hours and will cost $#{cost}"
