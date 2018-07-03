require 'rainbow'

def bmi
  puts Rainbow( "-------------------------------------").red
  print Rainbow( "| ").red
  print "Welcome to the BMI Calculator"
  puts Rainbow(" |").red
  puts Rainbow("-------------------------------------").red

  print "Please enter your height in meters: "
  height = gets.to_f
  print "Please enter your weight in kg: "
  weight = gets.to_i

  final = (weight)/(height*height)
  final = final.round(0)

  puts "Your BMI is:  #{final}"

end

bmi
