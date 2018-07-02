require 'pry'
require 'rainbow'

def exp
  print "whats the number: "
  num = gets.chomp.to_f

  print "whats the exponent: "
  exp = gets.chomp.to_f

  result = num ** exp
  puts "#{num} to the power of #{exp} is #{result}."
end

def root
  print "whats the number: "
  num = gets.chomp.to_i

  result = Math.sqrt(num)

  puts "The square root of #{num} is #{ result }"
end

def add
  sum = 0
  print "type the fist number: "
  num = gets.chomp

  until num == 'q' || num == ''
    sum += num.to_i

    print "and the next: "
    num = gets.chomp
  end

  puts "Your sum was #{ sum }"
end

def multiply
  result = 1
  print "type the fist number: "
  num = gets.chomp

  until num == 'q' || num == ''
    result *= num.to_i

    print "and the next: "
    num = gets.chomp
  end

  puts "The result is #{ result }"
end

def divide

  print "type the fist number: "
  num = gets.chomp
  quot = num.to_i
  num = 1
  until num == 'q' || num == ''
    quot /= num.to_i

    print "and the next: "
    num = gets.chomp
  end

  puts "Your quotient was #{ quot }"
end

def subtract
  print "type the fist number: "
  num = gets.chomp
  dif = num.to_i
  num = 0
  until num == 'q' || num == ''

    dif -= num.to_i

    print "and the next: "
    num = gets.chomp
  end

  puts "Your difference was #{ dif }"
end


# Calcumalator
def show_menu
  puts "Welcome to the Rubylator"
  puts Rainbow("-=" * 40).red
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Divide"
  puts "[e] - Exponent"
  puts "[r] - Square Root"
  puts "[q] - Quit"
  puts "-=" * 40
  print "Enter your selection: "
end


show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'

  case menu_choice
  when 'a'
    add
  when 's'
    subtract
  when 'd'
    divide
  when 'm'
    multiply
  when 'r'
    root
  when 'e'
    exp
  else
    puts "That's not rubylatorable."
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thanks for using the Rubylator"
