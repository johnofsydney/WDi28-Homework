require 'pry'

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[b] - Minus"
  puts "[c] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponent"
  puts "[f] - BMI Calculator"
  puts "[m] - Mortgage Calculator"
  puts "[q] - Quit"
  print "Enter your selection: "
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    print "Enter first number:"
    number_1 = gets.to_i
    print "Enter second number:"
    number_2 = gets.to_i
    puts "Your result is: #{number_1 + number_2}"
  when 'b'
    print "Enter first number:"
    number_1 = gets.to_i
    print "Enter second number:"
    number_2 = gets.to_i
    puts "Your result is: #{number_1 - number_2}"
  when 'c'
    print "Enter first number:"
    number_1 = gets.to_i
    print "Enter second number:"
    number_2 = gets.to_i
    puts "Your result is: #{number_1 * number_2}"
  when 'd'
    print "Enter first number:"
    number_1 = gets.to_i
    print "Enter second number:"
    number_2 = gets.to_i
    puts "Your result is: #{number_1 / number_2}"
  when 'e'
    print "Enter your number:"
    number_1 = gets.to_i
    print "Enter Exponent number:"
    number_2 = gets.to_i
    puts "Your result is: #{number_1 ** number_2}"
  when 'm'
    print "Loan amount:"
    number_a = gets.to_i
    print "Amount paid:"
    number_p = gets.to_i
    print "Loan time left in MONTHS:"
    number_m = gets.to_i
    puts "Monthly payment left is: #{(number_a - number_p) / number_m}"
  when 'f' #BMI = 75 ÷ (1.8 × 1.8)
    print "Enter your weight in Kilos:"
    number_k = gets.to_i
    print "Enter your hight in cm ex:1.8 for 1 mt and 80 cm:"
    number_h = gets.to_f
    puts "Your result is: #{number_k/(number_h * number_h)}"
  else
    puts "Invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thank you for using crappy calculator."
