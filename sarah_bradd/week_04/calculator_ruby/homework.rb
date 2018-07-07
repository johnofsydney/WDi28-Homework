require 'pry'

print "Calculator"
def show_menu

  puts "[+] - addition"
  puts "[-] - subtraction"
  puts "[*] - multiplication"
  puts "[/] - division "
  puts "[s] - square root"
  puts "[q] - quit"
  print "enter your selection"

  end
show_menu
menu_choice = gets.chomp.downcase
until menu_choice == 'q'
  case menu_choice
    def addition
      a = prompt ('Enter your first number').to_i
      b = prompt ('Enter your second number').to_i
      puts "#{ a } + #{ b } = #{ a + b }"

    end

    def subtraction (a, b)
      a = prompt ('Enter your first number').to_i
      b = prompt ('Enter your second number').to_i
      puts "#{ a } + #{ b } = #{ a + b }"

    end

    def multiplication (a, b)
      a = prompt ('Enter your first number').to_i
      b = prompt ('Enter your second number').to_i
      puts "#{ a } * #{ b } = #{ a + b  }"

    end
    def division (a, b)
      a = prompt ('Enter your first number').to_i
      b = prompt ('Enter your second number').to_i
      puts "#{a} / #{b} = #{ a / b }"
    end

    def square_root (a)
      a = prompt ('Enter your number').to_i
      puts "#{ a } squared = #{ a * a }"
    end

    def quit (q)
      q = prompt ('Enter q to quit game')
      puts "thanks for using calculator"
    end

binding.pry
