# Nucleotide Count
# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
#
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
#
# Shortest intro to biochemistry EVAR:
#
# twigs are to birds nests as
# nucleotides are to DNA and RNA as
# amino acids are to proteins as
# sugar is to starch as
# oh crap lipids
# I'm not going to talk about lipids because they're crazy complex.
#
# So back to nucleotides.
#
# There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.
#
# There are no other nucleotides.
#
# Find how many of each nucleotides are in a string that you pass in to a function
#
# Make sure that you validate it has nucleotides!
require 'pry'

@nucleotides = {
  A: 0,
  C: 0,
  G: 0,
  T: 0,
  U: 0
}

def find_tides word

  word_array = word.upcase.split('')

  word_array.each do |letter|

    @nucleotides.each do |key, value|
      if letter == key.to_s
        @nucleotides[key] = @nucleotides[key] + 1
      end
    end
  end

  @nucleotides
end

p find_tides "CGTETYAYFNFGJJUUJU"


def nucleotides
  hashy_hash = {
    A: 0,
    C: 0,
    G: 0,
    T: 0,
    U: 0
  }
end

def find_tides_with_count word

  word_array = word.split('')
  local_hash = nucleotides

  local_hash.each do |key, value |
    local_hash[key] = word.count key.to_s
  end

  local_hash
end

p find_tides_with_count "CGTETYAYFNFGJJUUJU"





# Here is a beautifully commented version from GA guru Josh McEvoy
#
# require 'pry'
#
# # defining our object with a starting count of zero
# @nucleotides = {
#   A: 0,
#   C: 0,
#   G: 0,
#   T: 0
# }
#
# def count_nucleotides word
#   # upcasing and splitting the string to account for strange user inputs then gain access to the individual characters.
#   word = word.upcase.split('')
#
#   # using an each loop to iterate through each character
#   word.each do | letter |
#     # in the first iteration letter => 'A'
#     @nucleotides.each do | key, value |
#
#       # checking if the letter is strictly equal to the keys in the @nucleotides object.
#       if key.to_s == letter
#
#         # adding one onto the value of the @nucleotides
#         @nucleotides[ key ] += 1
#
#       end
#
#     end
#
#   end
#
#   # returning the modified object.
#   @nucleotides
#
# end
#
# puts count_nucleotides('ACTGAOFHHNIECT')
#
#
# # -------------------------------------------------------
# # -------------------------------------------------------
# # -------------------------------------------------------
#
#
# # Alternative to the instance variable - Use a method.
# # The implicit return immediately spits out the hash you create -- You can read this within methods.
#
# def nucleotide_score
#   {
#     A: 0,
#     C: 0,
#     G: 0,
#     T: 0
#   }
# end
#
# def count_nucleotides_in word
#   word = word.upcase.split('')
#
#   # Create a blank score using the nucleotide_score method above.
#   score = nucleotide_score
#
#     nucleotide_score.each do | key, value |
#
#       # Ruby gives us the .count method. ["A, B, A, C, A"].count( "A" ) => 3.
#       # This means we don't actually need to iterate our word array, we can just add our count to the score key's value.
#       score[ key ] = word.count( key.to_s )
#     end
#
#   score
#
# end
#
# p count_nucleotides_in 'ACTGAOFHHNIECT'
