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



def show_menu
  puts "calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Substraction"
  puts "[m] - Multiply"
  puts "[d] - Divide"
  puts "[e] - Exponents"
  puts "[r] - Square roots"
  puts "[q] = Quit"
  print "Enter your selection: "
end

show_menu
menu_choice  = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    print "enter number 1"
    number_1 = gets.chomp.to_i
    print "enter number 2"
    number_2 = gets.chomp.to_i
    p number_1 + number_2

  when 's'
    print "enter number 1 :"
    number_1 = gets.chomp.to_i
    print "enter number_2 :"
    number_2 = gets.chomp.to_i
    p number_1 - number_2

  when 'm'
    print "enter number 1 :"
    number_1 = gets.chomp.to_i
    print "enter number_2 :"
    number_2 = gets.chomp.to_i
    p number_1 * number_2

  when 'd'
    print "enter number 1 :"
    number_1 = gets.chomp.to_i
    print "enter number_2 :"
    number_2 = gets.chomp.to_i
    p number_1 / number_2

  when 'e'
    print "enter the number :"
    number = gets.chomp.to_i
    p math.sqrt(number)


  end
  show_menu
  menu_choice  = gets.chomp.downcase

end
