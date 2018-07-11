# Atbash Cipher
# The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.

# An Atbash cipher for the Latin alphabet would be as follows:

# Plain:  abcdefghijklmnopqrstuvwxyz
# Cipher: zyxwvutsrqponmlkjihgfedcba
# It is a very weak cipher because it only has one possible key, and it is a simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.

# Ruby
# Write code that will accept a text input and encode / decode it and output the results

# Examples
# Encoding "test" gives "gvhg"
# Decoding "gvhg" gives "test"

require 'pry' 

class Atbash 

    def initialize input 
        @input = input
        p encode 
    end 

    def encode 
        output = "" 
        alphabet = ("a".."z").to_a

        @input.split("").each do |letter| 
            i = alphabet.index letter 
            output << alphabet.reverse[i]

        end 


        output 
    end 
end 

binding.pry 