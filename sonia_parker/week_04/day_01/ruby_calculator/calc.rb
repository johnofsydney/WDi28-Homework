require "pry"

def show_menu
puts "calculator"
puts "-=" *40
puts "[a] - Addition"
puts "[s] - Substraction"
puts "[m] - Multiplication"
puts "[d] - Division"
puts "[q] - Quit"
puts "[x] - Square Root"
print "Enter your selection : "
end

show_menu

menu_choice  = gets.chomp.downcase


until menu_choice =="q"
  case menu_choice
  when "a"
    puts "enter first number to add : "
    first_number_to_add = gets.to_i
    puts "enter second number to add : "
    second_number_to_add = gets.to_i

    def add(a,b)

      a + b #implicit return
    end

    p "result of addition is #{add first_number_to_add, second_number_to_add}" #printing the result of called function to the screen


  when "s"
    puts "enter first number to substract : "
    first_number_to_substract = gets.to_i
    puts "enter second number to substract : "
    second_number_to_substract = gets.to_i

    def substract(a,b)

      a - b #implicit return
    end

    p "result of substraction is #{substract first_number_to_substract, second_number_to_substract}" #printing the result of called function to the screen

  when "m"
    puts "enter first number to multiply : "
    first_number_to_multiply = gets.to_i
    puts "enter second number to multiply : "
    second_number_to_multiply = gets.to_i

    def multiply(a,b)

      a * b #implicit return
    end

    p "result of Multiplication is #{multiply first_number_to_multiply, second_number_to_multiply}" #printing the result of called function to the screen

  when "d"

    puts "enter first number to divide : "
    first_number_to_divide = gets.to_i
    puts "enter second number to divide : "
    second_number_to_divide = gets.to_i

    def divide(a,b)
      a / b #implicit return
    end

    p "result of division is #{divide first_number_to_divide, second_number_to_divide}" #printing the result of called function to the screen

  when "x"

    puts "enter number to find square root of : "
    number_to_root = gets.to_i


    def root(a)
      a *a #implicit return
    end

    p "result of square rooting is #{root number_to_root}" #printing the result of called function to the screen

  else
    puts "invalid selection"
  end
show_menu
menu_choice = gets.chomp.downcase

end

puts "thank you for using crappy calculator"
