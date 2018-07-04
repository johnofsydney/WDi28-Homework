# Sydney Suburbs
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

print "What Suburb do you live in? : "
residence = gets.chomp.downcase

puts case residence
when 'glebe'
  "Beautiful foreshore walk"
when 'greenwich'
  "Cool oil spill"
when 'cabramatta'
  "Fine dining and heroin"
else
  "I'm sure it's a lovely place"
end
