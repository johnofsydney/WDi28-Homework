require "pry"

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[b] - Subtraction"
  puts "[c] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponential"
  puts "[f] - Root Square"
  puts "[g] - Morgage Calculator"
  puts "[h] - BMI"
  puts "[i] - Trip Calculator"

  puts "[q] - Quit"
  print "Enter your selection: "

end

show_menu
menu_choice = gets.chomp.downcase


until menu_choice == 'q'
  case menu_choice
    when 'a'
      print "Key in your first number: "
      a = gets.to_i
      print "Key in your second number: "
      b = gets.to_i
        p "Your answer is #{a + b}"
  when 'b'
    print "Key in your first number: "
    a = gets.to_i
    print "Key in your second number: "
    b = gets.to_i
        p "Your answer is #{a - b}"
  when 'c'
    print "Key in your first number: "
    a = gets.to_i
    print "Key in your second number: "
    b = gets.to_i
        p "Your answer is #{a * b}"
  when 'd'
    print "Key in your first number: "
    a = gets.to_i
    print "Key in your second number: "
    b = gets.to_i
        p "Your answer is #{a / b}"
  when 'e'
    print "Key in your first number: "
    a = gets.to_i
    print "Key in your second number: "
    b = gets.to_i
        p "Your answer is #{a ** b}"
  when 'f'
    print "Key in your first number: "
    a = gets.to_i
    print "Key in your second number: "
    b = gets.to_i
        p "Your answer for first number is #{Math.sqrt(a)}"
        p "Your answer for first number is #{Integer.sqrt(b)}"
  when 'g'
    print "Key in your Loan Amount: "
    principle = gets.to_f
    print "Key in your Interest Rate: "
    interest = gets.to_f
    p "Repayment calculation is based on a loan period of 30 years. "

    r = (interest/12) / 100
    n = 360
    # binding.pry
    monthly_repayment = principle * (( r * ( (1 + r) ** n) ) / (((1 + r) ** n) - 1))
    p "Your monthly repayment for a loan period of 30 years is $ #{monthly_repayment}"
  when 'i'
    print "Key in your distance traveled by miles: "
    distance = gets.to_f
    print "Key in your miles per gallon: "
    miles_per_gallon = gets.to_f
    print "Key in your price per gallon: "
    price_per_gallon = gets.to_f
    print "Key in your speed in miles per hour: "
    speed = gets.to_f

    trip_time = distance / speed
    trip_cost = price_per_gallon * miles_per_gallon
    p "Your trip time #{ trip_time }"
    p "Your trip cost #{ trip_cost }"
  else
    puts "Invalid selection"
end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thank you for using crappy calculator"


# Trip Calculator
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

# binding.pry
