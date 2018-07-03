# Title: Guess The Number
# Activity:
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"


print "How hard would you like this? "
MAX_VALUE = gets.to_i

print "Pick a random number between 0 and #{MAX_VALUE} : "
number = gets.to_i

random_number = rand 1..MAX_VALUE #RANDOM_NUMBER all caps is a constant.

while number != random_number
  if number < random_number
    p "too low"
  end
  if number > random_number
    p "too high"
  end
  if number == random_number
    p "Spot on"
  end
  number = gets.to_i
end
