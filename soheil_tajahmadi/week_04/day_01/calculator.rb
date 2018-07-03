require 'pry'

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Power"
  puts "[r] - Square root"

  puts "[q] - Quit"
  print "Enter your selection: "
end

def num_input
  print "Enter your first number: "
  a = gets.to_i
  print "Enter your Second number: "
  b = gets.to_i
  return [a,b]
end


show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "Addition selected"
    a = num_input
    puts "The result is #{a[0] + a[1]}"
  when 's'
    puts "Subtraction selected"
    a = num_input
    puts "The result is #{a[0] - a[1]}"
  when 'm'
    puts "Multiplication selected"
    a = num_input
    puts "The result is #{a[0] * a[1]}"
  when 'd'
    puts "Division selected"
    a = num_input
    puts "The result is #{a[0] / a[1]}"
  when 'e'
    puts "Power selected"
    a = num_input
    puts "The result is #{a[0] ** a[1]}"
  when 'r'
    puts "Square root selected"
    print "Enter your first number: "
    a = gets.to_i
    puts "the result is #{Math.sqrt(a)}"
  else
    puts "Invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "Thank you for using crappy calculator."
