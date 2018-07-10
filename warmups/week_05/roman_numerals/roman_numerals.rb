require "pry"

class Integer
  # class Integer is the pre-defined class of Integer numbers.
   # what we are doing below is extending the class by adding a new method.
   # to see the built in methods for class of integer type something like `5.methods.sort`

  ROMANS = {
      "M" => 1000,
      "CM" => 900,
      "D" => 500,
      "CD" => 400,
      "C" => 100,
      "XC" => 90,
      "L" => 50,
      "XL" => 40,
      "X" => 10,
      "IX" => 9,
      "V" => 5,
      "IV" => 4,
      "I" => 1
  }

  def to_roman
    number = self
    #  self is like `this` in javascript. in this example if we call this method thusly `5.to_roman` then self is 5
    output = ""

    # long way. would need lots of if / else statements.
    # if number == 1
    #   output = "I"
    # elsif number == 2
    #   output = "II"
    # else
    #   output = "III"
    # end

    # clever ruby way - eaching through the hash defined above.
    ROMANS.each do |key, value|
      # output = output + key * ( number / value )
      output << key * ( number / value )
      number = number % value
    end


    output
  end

end


# binding.pry










































# require 'pry'
#
# class Integer
#
#   ROMANS = {
#       "M" => 1000,
#       "CM" => 900,
#       "D" => 500,
#       "CD" => 400,
#       "C" => 100,
#       "XC" => 90,
#       "L" => 50,
#       "XL" => 40,
#       "X" => 10,
#       "IX" => 9,
#       "V" => 5,
#       "IV" => 4,
#       "I" => 1
#   }
#
#   def to_roman
#     number = self
#     output = ""
#
#     # if number == 1
#     #   output = "I"
#     # elsif number == 2
#     #   output = "II"
#     # else
#     #   output = "III"
#     # end
#
#     ROMANS.each do |key, value|
#       output << key * ( number / value)
#       number = number % value
#     end
#
#
#     output
#   end
# end
#
#
#
# # binding.pry








































# class Integer
#     ROMANS = {
#         "M" => 1000,
#         "CM" => 900,
#         "D" => 500,
#         "CD" => 400,
#         "C" => 100,
#         "XC" => 90,
#         "L" => 50,
#         "XL" => 40,
#         "X" => 10,
#         "IX" => 9,
#         "V" => 5,
#         "IV" => 4,
#         "I" => 1
#     }
#
#
#     def to_roman
#         int = self
#         result = ""
#
#         ROMANS.each do |sign, num|
#             result << sign * ( int / num )
#             int = int % num
#         end
#
#         result
#     end
# end
