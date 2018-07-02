# # Calculator
# # Explanation
# # You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# # Specification:
# # A user should be given a menu of operations
# # A user should be able to choose from the menu
# # A user should be able to enter numbers to perform the operation on
# # A user should be shown the result
# # This process should continue until the user selects a quit option from the menu
# # Phase 1
# # Calculator functionality
# # Calculator should be able to do basic arithmetic (+,-, *, /)

############################################################################
def addition_function # declare this outside of the case and loop so we can call it repeatedly
  puts "Which numbers would you like to add?"
  n1 = gets.chomp.to_i
  n2 = gets.chomp.to_i
  answer = n1 + n2
  puts "The sum is: #{answer}"
end
############################################################################
def subtraction_function
  puts "Which numbers would you like to subtract?"
  n1 = gets.chomp.to_i
  n2 = gets.chomp.to_i
  answer = n1 - n2
  puts "The answer is: #{answer}"
end
############################################################################
def multiplication_function # declare this outside of the case and loop so we can call it repeatedly
  puts "Which numbers would you like to multiply?"
  n1 = gets.chomp.to_i
  n2 = gets.chomp.to_i
  answer = n1 * n2
  puts "The sum is: #{answer}"
end
############################################################################
def division_function
  puts "Which numbers would you like to divide?"
  n1 = gets.chomp.to_i
  n2 = gets.chomp.to_i
  answer = n1 / n2
  puts "The answer is: #{answer}"
end
############################################################################
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
############################################################################
def square_root_function
  puts "What number would you like to have squared root?"
  n1 = gets.chomp.to_i
  n2 = 0.5
  answer = n1 ** n2
  puts "The answer is: #{answer}"
end
############################################################################

def exponent_function
  puts "Which numbers would you like to exponent ?"
  n1 = gets.chomp.to_i
  n2 = gets.chomp.to_i
  answer = n1 ** n2
  puts "The answer is: #{answer}"
end

############################################################################
# Calculate the body mass index (BMI) for an individual, given their height and weight

def bmi_function
  puts "What is your height(m)and your weight(kg)?"
  h = gets.chomp.to_f
  w = gets.chomp.to_f # to_i is whole number only, to_f is float (eg 1.8)
  answer = w/(h**2)
  puts " Your BMI is: #{answer}"
end
############################################################################
# Mortgage Calculator
    # Calculate the monthly required payment given
     # the other variables as input (look up the necessary variables)

def mortgage_function
    puts "What is the whole amount and payment period?"
    a = gets.chomp.to_i
    p = gets.chomp.to_i
    answer = a/p
    puts " you should pay #{answer} dollars each month"
 end
############################################################################
      # Trip Calculator
      # Calculate a trip time and cost given inputs for
      #
      # distance
      # miles per gallon
      # price per gallon
      # speed in miles per hour

  def trip_calculator_function
      puts "What is the distance(m), your speed (mph), fuel consumption rate (mpg) and  fuel price (ppg)?"
      s = gets.chomp.to_i
      d = gets.chomp.to_i
      c = gets.chomp.to_i
      r = gets.chomp.to_i
      answer1 =s/d
      answer2 = r*(d/c)
  puts " you will get there in #{answer1} hour and it will cost #{answer2} dollars for you"
end

############################################################################
############################################################################

def show_menu
  puts "Calculator"
  puts"-" * 40
  puts "[a] - Addition"
  puts "[m] - Multiplication"
  puts "[s] - Subtraction"
  puts "[d] - Division"
  puts "[r] - Square Root"
  puts "[e] - Exponent"
  puts "[b] - BMI"
  puts "[f] - Mortgage Calculation"
  puts "[t] - Trip Calculation"
  puts "[q] - Quit"
  puts"-" * 40
  print "Enter your selection:"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'

############################################################################
case menu_choice
when'a'
    addition_function
end
############################################################################
case menu_choice
when's'
    subtraction_function
end
############################################################################
case menu_choice
when'm'
    multiplication_function
end
############################################################################
case menu_choice
when'd'
    division_function
end
  ############################################################################
case menu_choice
when'r'
    square_root_function
end
  ############################################################################
  case menu_choice
  when'e'
      exponent_function
  end
  ############################################################################
  case menu_choice
  when'b'
      bmi_function
  end
  ############################################################################
  case menu_choice
  when'f'
      mortgage_function
  end
  ############################################################################
  case menu_choice
  when't'
      trip_calculator_function
  end
  ############################################################################
   show_menu #this will run now after the cae statement has run, thereby returnning to the menu when the addition is complete
   menu_choice = gets.chomp.downcase # ask for the menu_choice again so our choice can change between loops
end
