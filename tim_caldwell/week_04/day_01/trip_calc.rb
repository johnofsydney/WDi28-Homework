puts "Welcome to the trip calculator."
puts "We'll help you plan your journey. Lets get some info!\n"
print "First, how far are you travelling? (miles)"
miles = gets.to_f

print "Great, now what will your speed be in mph? "
mph = gets.to_f

print "And how many miles per gallon does your car get? "
mpg = gets.to_f

print "And whats the price per gallon of gas at the moment? "
price = gets.to_f

time = miles / mph #hours
cost = miles / mpg * price #cost of gas for the trip

puts "Great, your trip will take about #{time} hours and cost #{ cost } for gas."
