# Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

require 'pry'

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[b] - Substraction"
  puts "[c] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponent"
  puts "[f] - Square Root"
  puts "[g] - Mortgage"
  puts "[h] - BMI"
  puts "[i] - Trip"
  puts "[q] - Quit"
  print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "Enter your first number: "
    a = gets.to_i
    puts "Enter your second number: "
    b = gets.to_i
    a + b
    puts "the answer is #{a + b}"
  when 'b'
    puts "Enter your first number: "
    a = gets.to_i
    puts "Enter your second number: "
    b = gets.to_i
    a - b
    puts "the answer is #{a - b}"
  when 'c'
    puts "Enter your first number: "
    a = gets.to_i
    puts "Enter your second number: "
    b = gets.to_i
    puts "the answer is #{a * b}"
  when 'd'
    puts "Enter your first number: "
    a = gets.to_i
    puts "Enter your second number: "
    b = gets.to_i
    puts "the answer is #{a / b}"
  when 'e'
    puts "Enter your base number: "
    a = gets.to_i
    puts "Enter your exponent: "
    b = gets.to_i
    puts "the answer is #{a ** b}"
  when 'f'
    puts "Find the square root of: "
    a = gets.to_i
    puts "the answer is #{Integer.sqrt(a)}"
  when 'g'
    puts "Enter your principal: "
    principal = gets.to_f
    puts "Enter your annual interest: "
    annual_interest = (gets.to_f) / 100
    monthly_interest = annual_interest / 12
    puts "Enter how many monthly payments: "
    number_payments = gets.to_f * 12
    monthly_payment = principal * ( ( monthly_interest * ((1 + monthly_interest) ** number_payments) ) / ( ( (1 + monthly_interest) ** number_payments) - 1) )
    puts "the answer is #{monthly_payment}"
  when 'h'
    puts "Enter your weight in KG: "
    weight = gets.to_f
    puts "Enter your height in Metres: "
    height = gets.to_f
    puts "your BMI is #{(weight / (height ** 2))}"
  when 'i'
    puts "Enter your distance"
    d = gets.to_f
    puts "Enter your miles per gallon"
    m = gets.to_f
    puts "Enter your price per gallon"
    p = gets.to_f
    puts "Enter your speed in miles per hour"
    s = gets.to_f
    puts "your trip time is #{d / s}"
    puts "your trip cost is #{p * m}"
  else
    puts "Invalid selection"
  end
  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thank you for using crappy calculator."

#gem rainbow ruby - gem install rainbow and require rainbow
