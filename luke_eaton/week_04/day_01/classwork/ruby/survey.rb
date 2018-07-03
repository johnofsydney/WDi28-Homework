# Initial greeting
puts "What is your first name?"

# first_name = gets
# This will wait for user input, and include the new line in the variable

first_name = gets.chomp
# This will wait for user input, and strip the new line from the variable
# For more documentation on chomp - http://ruby-doc.org/core-2.2.0/String.html#method-i-chomp

puts "Your first name is #{ first_name }."

p "What is your surname? " # using `p` will allow you to put the input on the same line.
surname = gets.chomp # Chaining
puts "Your surname is #{ surname }."

puts "Your full name is #{ first_name } #{ surname }"
# fullname = "#{ first_name } #{ surname }"
# Sames as ... puts "Your full name is #{ fullname }"

puts "What is your address?"
address = gets.chomp
fullname = "#{ first_name }" + " " + "#{ surname }"
puts "Your name is #{ fullname } and you live at #{ address }"
