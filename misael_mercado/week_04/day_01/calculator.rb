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
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)


require "pry"
require 'rainbow'

def show_menu
  puts "Welcome to the crappy Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - subtraction"
  puts "[m] - multiplication"
  puts "[d] - division"
  puts "[q] - Quit"
  print " Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase


until menu_choice == "q"
  case menu_choice
  when "a"
    print "Please enter number 1 : "
# get the input from the console,
    val1 = gets
    print "Please enter number 2 : "
    val2 = gets
# convert the string console inputs to_i (to_integers) and add together
    puts "Answer : #{val1.to_i + val2.to_i}"
  when "s"
    print "Please enter number 1 : "
    val1 = gets
    print "Please enter number 2 : "
    val2 = gets
    puts "Answer :#{val1.to_i - val2.to_i}"
  when "m"
    print "Please enter number 1 : "
    val1 = gets
    print "Please enter number 2 : "
    val2 = gets
    puts "Answer : #{val1.to_i * val2.to_i}"
  when "d"
    print "Please enter number 1 : "
    val1 = gets
    print "Please enter number 2 : "
    val2 = gets
    puts "Answer : #{val1.to_i / val2.to_i}"

   else
     puts "Invalid selection"
   end
   show_menu
   menu_choice = gets.chomp.downcase
end
puts " Thank you for using this crappy calculator."
