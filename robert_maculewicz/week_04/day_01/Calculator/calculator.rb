def show_menu      #we create function menu
  puts "Calculator"
  puts  "=-"* 40
  puts "Main menu:"  #menu choice
  puts "[a] - Addition"
  puts "[s] - Subtraction "
  puts "[m] - Multiplication "
  puts "[d] - Division"
  puts "[bmi] - Body"
  puts "[e] - Exit"
  print "Plase enter your selection: "  #make selection
end

def bmi
  puts "BMI Calculator"
  puts "Plase entry you name:"
  name = gets.chomp
  puts "Hello #{name}, let's start"
  puts "Plase enter You weight in kg: "
  weight = gets.to_f
puts "Plase enter You height in cm: "
  height = gets.to_f
  result = weight / (height ** 2) * 10000
puts "------------Your BMI is: #{result.round(2)}----------------"
  if result < 18.5
puts "-----------You are underweight - EAT MORE------"
  elsif result < 24.9 && result > 18.5
puts "-------------Correct weight-------------"
  elsif result > 25 && result < 29.9
puts "-----------You are overweight---------------"
  elsif result > 29.9
puts "-----------You are obese - STOP EAT------------"
  else
  puts "ffffff"
  end
end

  show_menu    #call function

  menu_choice = gets.chomp.downcase  #wait for choice
  until menu_choice == 'e'    #use becuse until keep going until someone entry q and comeback to main menu
    case menu_choice     #use condition case becuse we wand exacly do some job
    when 'a'
      puts "Addition start"  #print info
      puts "Please enter first number:"  #wait for number
      num1 = gets.to_i                   #redy for fest num
      puts "Plase enter second number:"
      num2 = gets.to_i
      result = num1 + num2
      puts "Result is #{result}"   #print result both numbers
    when 's'
      puts "Substraction start"
      puts "Plase enter first number: "
      num1 = gets.to_i
      puts "Plase enter second number: "
      num2 = gets.to_i
      result = num1 - num2
      puts "Result is #{result}"
    when 'm'
      puts "Multiplication start"
      puts "Plase enter first number: "
      num1 = gets.to_i
      puts "Plase enter second number: "
      num2 = gets.to_i
      result = num1 * num2
      puts "Result is #{result}"
    when 'd'
      puts "Division start"
      puts "Plase enter first number: "
      num1 = gets.to_f
      puts "Plase enter second number: "
      num2 = gets.to_f
      result = num1 / num2
      puts "Result is #{result}"
    when 'bmi'
      bmi
    else
      puts "Invalid selection"   #print info about wrong input
    end
    show_menu
    menu_choice = gets.chomp.downcase
  end
  puts 'Thanks'
