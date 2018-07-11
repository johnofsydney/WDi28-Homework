# Scrabble Score
# Write a program that, given a word, computes the scrabble score for that word.
#
# scrabble("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user.
#
# Letter Values
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Extensions
# You can play a :double or a :triple letter.
# You can play a :double or a :triple word.

require 'pry'
def scrabble word
  letter_values = {
    1 => ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    2 => ['D', 'G'],
    3 => ['B', 'C', 'M', 'P'],
    4 => ['F', 'H', 'V', 'W', 'Y'],
    5 => ['K'],
    8 => ['J', 'X'],
    10 => ['Q', 'Z']
  }

  score = 0

  word_array = word.upcase.split("").each do |letter|

    letter_values.each do |key, value|
      score += key if value.include?(letter)
    end

  end

  score
end



p scrabble "cabbage"
