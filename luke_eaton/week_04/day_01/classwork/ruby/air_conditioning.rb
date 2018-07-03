# Air Conditioning
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."
#

require "pry" # Install the gem with 'gem install pry'

print "What is the current temperature? : "
current_temperature = gets.to_f

print "Is the A/C working? (y/n) : "
ac_working = gets.chomp.downcase[0]

print "What temperature would you like? : "
desired_temperature = gets.to_f

# binding.pry #equivalant to debugger in JS

if ac_working == 'y'
  puts "Turn on the ac please" if current_temperature > desired_temperature
else
  if current_temperature > desired_temperature
    puts "fixed the ac now It's hot!"
  else
    puts "Fix the ac now!"
  end
end
