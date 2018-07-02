=begin   # this only function for BMI
def calculator
puts "BMI Calculator"
puts "Plase entry you name:"
name = gets.chomp
puts "Hello #{name}, let's start"
puts "Plase enter You weight in kg: "
weight = gets.to_f
puts "Plase enter You height in cm: "
height = gets.to_f
result = weight / (height ** 2) * 10000
puts "Your BMI is: #{result.round(2)}"
end
calculator
=end
