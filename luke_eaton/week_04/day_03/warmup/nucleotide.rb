require 'pry'
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
@nucleotides = {
  A: 0,
  C: 0,
  G: 0,
  T: 0,
  U: 0,
}

def find_tides word


  word_array = word.split('')

  word_array.each do |letter|

    @nucleotides.each do |key, value|
      if letter == key.to_s
        @nucleotides[key] = @nucleotides[key] + 1
      end
    end
  end

  @nucleotides
end

p find_tides "CNSEJBCSIEUBSOBSOCZZQTU"
