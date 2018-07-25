# Calculator
# Explanation
# Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
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

# require 'pry'
# require 'rainbow'

def show_menu
  puts "calculator"
  puts "-=" * 40 #this is just printing something across the screen
  puts "[a] - Addition"
  puts "[q] - Quit"
  puts "[m] - Multiply"
  puts "[d] - Divide"
  puts "[s] - Square Root"
  print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase


#adding function
def add (a, b)
  a + b
end

#multiply function
def multiply (a, b)
  a * b
end

#divide function
def divide (a, b)
  a / b
end

def square_root(a)
  Integer.sqrt(a)
end

until menu_choice == 'q'
  case menu_choice

  when 'a'
    print "Please enter two numbers: "
    x = gets.to_i
    y = gets.to_i
    result = add(x, y)
    puts "#{ x } + #{ y } = #{ result }"
    show_menu
    menu_choice = gets.chomp.downcase

  when 'm'
    print "Please enter two numbers: "
    x = gets.to_i
    y = gets.to_i
    result = multiply(x, y)
    puts "#{x} * #{y} = #{result}"
    show_menu
    menu_choice = gets.chomp.downcase

  when 'd'
    print "Please enter two numbers: "
    x = gets.to_i
    y = gets.to_i
    result = divide(x, y)
    puts "#{x} / #{y} = #{result}"
    show_menu
    menu_choice = gets.chomp.downcase

  when 's'
    print "Please enter the number you want the squareroot of: "
    a = gets.to_i
    result = Integer.sqrt(a) #could use Math.sqrt() instead here if you dont want it to round to q whole number.. but if you dont care then just use integer.sqrt
    puts "The squareroot of #{a} is #{result}"
    show_menu
    menu_choice = gets.chomp.downcase

  else
    puts "Invalid selection"
    show_menu
    menu_choice = gets.chomp.downcase
  end #closes case selecion
end

show_menu
menu_choice = gets.chomp.downcase
# end

puts "Thank you for using calculator"

# binding.pry
# binding.rainbow
