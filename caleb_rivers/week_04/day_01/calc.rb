def show_menu
  puts 'Calculator'
  puts "-=" * 20
  puts "A for Additions"
  puts "S for Subraction"
  puts "M for Multiplication"
  puts "D for Division"
  puts "E for Exponents"
  puts "SQ for Square root"
  puts "Q for Quit"
  print "Enter your Selection: "
end

def add
  print "Enter the first number you want to add: "
  num1 = gets.to_i
  print "Enter the second number you want to add: "
  num2 = gets.to_i
  num1+num2
end

def subtract
  print "Enter the first number you want to subtract: "
  num1 = gets.to_i
  print "Enter the second number you want to subtract: "
  num2 = gets.to_i
  num1-num2
end

def multiply
  print "Enter the first number you want to multiply: "
  num1 = gets.to_i
  print "Enter the second number you want to multiply: "
  num2 = gets.to_i
  num1*num2
end

def divide
  print "Enter the first number you want to divide: "
  num1 = gets.to_i
  print "Enter the second number you want to divide: "
  num2 = gets.to_i
  num1/num2
end

def exponents
  print "Enter the first number you want to times: "
  num1 = gets.to_i
  print "To the power of: "
  num2 = gets.to_i
  num1**num2
end

def sqrt
  print "Enter the first number you want to square root:  "
  num2 = gets.to_i
  square_root = Math.sqrt(num2)
  square_root
end
show_menu
menu_choice = gets.chomp.downcase

until menu_choice == "q"

  case menu_choice
  when 'a'
    puts add
  when 's'
    puts subtract
  when 'm'
    puts multiply
  when 'd'
    puts divide
  when 'e'
    puts exponents
  when 'sq'
    puts sqrt
  else
    puts "invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase

end

puts "Thankyou for using crappy calculator"
