require 'pry'

def show_menu
  puts "calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - division"
  puts "[e] - exponents"
  puts "[r] - square root"
  puts "[b] - mortgage calculator"
  puts "[i] - BMI calc"
  puts "[t] - trip calc"
  puts "[l] - repl"
  puts "[q] - Quit"
  print "Enter your selection: "
end

def add(a, b)
  result = a + b
  return result
end
def subtract(a, b)
  result = a - b
  return result
end
def multiply(a, b)
  result = a * b
  return result
end
def division(a, b)
  result = a / b
  return result
end
def exponents(a, b)
  result = a ** b
  return result
end

def sqrt(a)
  result = Math.sqrt(a)
  return result
end
def bmi(a, b)
  result = a / (b*b)
  return result
end

def mort(q, r, n)
  rate = (r / (100 * 12))
  result1 =  (rate * (1 + rate)**n)
  result2 = ((1 + rate)**n) - 1
  return q * (result1/result2)
end

def repl (n)
 handleinput(n)
end

def handleinput(input)
result = eval(input)
return result
end

# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

def trip(d,m,p,s)
  time = d / s
  cost = (d / m) * p
  puts "the journey will take #{time} hours and cost $#{cost}"
end


show_menu
menu_choice = gets.chomp.downcase


until menu_choice == 'q'
  case menu_choice
  when 'a'
    puts "Addition "
    puts "Number 1"
    num1 = gets.to_i
    puts"Number 2"
    num2 = gets.to_i
    puts "#{num1} + #{num2} = #{add(num1, num2)}"
  when 's'
    puts "Subtraction "
    puts "Number 1"
    num1 = gets.to_i
    puts"Number 2"
    num2 = gets.to_i
    puts "#{num1} - #{num2} = #{subract(num1, num2)}"
  when 'm'
    puts "Multiplication "
    puts "Number 1"
    num1 = gets.to_i
    puts"Number 2"
    num2 = gets.to_i
    puts "#{num1} * #{num2} = #{multiply(num1, num2)}"
  when 'd'
    puts "Division "
    puts "Number 1"
    num1 = gets.to_i
    puts"Number 2"
    num2 = gets.to_i
    puts "#{num1} / #{num2} = #{division(num1, num2)}"
  when 'e'
    puts "Exponents"
    puts "Number 1"
    num1 = gets.to_i
    puts"Number 2"
    num2 = gets.to_i
    puts "#{num1} ^ #{num2} = #{exponents(num1, num2)}"
  when 'r'
    puts "Square root"
    puts "Number 1"
    num1 = gets.to_i
    puts "the square root of #{num1} = #{sqrt(num1)}"
  when 'b'
    puts "Mortgage calc"
    puts "Principle"
    num1 = gets.to_f
    puts "rate"
    num2 = gets.to_f
    puts "number of monthly payments"
    num3 = gets.to_f
    puts " = #{mort(num1,num2,num3)}"
  when 'i'
    puts "Exponents"
    puts "weight"
    num1 = gets.to_f
    puts"height in metres"
    num2 = gets.to_f
    puts "your bmi  = #{bmi(num1, num2)}"
  when 't'
    puts "trip calc"
    puts "distance"
    num1 = gets.to_f
    puts "km / l"
    num2 = gets.to_f
    puts "price / litre"
    num3 = gets.to_f
    puts "speed"
    num4 = gets.to_f
    puts " = #{trip(num1,num2,num3,num4)}"
  when 'l'
    puts "REPL"
    puts "what you want"
    num1 = gets
    puts "#{repl(num1)}"
  else
    puts "invalid selection"
  end

  show_menu
  menu_choice = gets.chomp.downcase
end

puts "ty for using calc"
