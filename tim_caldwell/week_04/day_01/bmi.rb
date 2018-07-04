puts "Welcome to the BMI Calculator"
print "To start, we need your height (in meters): "
height = gets.to_f

print "And we need your weight (in kg) :"
weight = gets.to_f

bmi = weight / (height ** 2)

puts "Your BMI is: #{ bmi }"
