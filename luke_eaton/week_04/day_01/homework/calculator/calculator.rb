# Calculator
# Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic
# operations. Your function should allow the user to choose which operation is
# expected, enter in the values to perform the operation on, and ultimately view
# the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
require 'pry'

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[q] - Quit"
  puts "[a] - CALCULATE!"
  puts "[e] - Square Root"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "Enter first number: "
  num1 = gets.chomp.to_f

  puts "Enter Operator: "
  op = gets.chomp

  puts "Enter second number: "
  num2 = gets.chomp.to_f

  if op == "+"
       puts num1 + num2
  elsif op == "-"
       puts num1 - num2
  elsif op == "/"
       puts num1 / num2
  elsif op == "*"
       puts num1 * num2
  elsif op == "**"
       puts num1 ** num2
  else
       puts "Invalid Operator"
  end
when    "e"
  puts "Please enter the number you'd like to find the square root of."
  to_square = gets.chomp!
if to_square = to_square.to_i
    sqr = to_square ** (0.5)
    puts "Your square root is #{sqr}"
end
  puts "Thanks For Playing"

  end

  show_menu
  menu_choice = gets.chomp.downcase
  puts "Thanks For Playing"
  
end
