require 'pry'


# I've been quite nice and provided the skeleton of the solution. All you have to do is write the code.
# You can use regex.



# class WordProblem
#   # The test will generate a new instance of this class
#
#   def initialize question
#     #  You'll probably need this...
#   end
#
#   #  You'll maybe need some internal methods. Up to you...
#
#   def answer
#     # You certasinly need this - it's referred to in the test file.
#   end
#
# end








# class WordProblem
#   # The test will generate a new instance of this class
#
#   def initialize question
#     @question = question
#     get_nums
#   end
#
#   def get_nums
#
#     # arr = @question.split(' ')
#     # @num1 = arr[2].to_i
#     # @num2 = arr[4].to_i
#     # @operator = arr[3]
#     # @operator2 = arr[5]
#     # @num3 = arr[6].to_i
#     #
#     # if @num2.nil?
#     #   ( raise ArgumentError, "That's too complicated!" )
#     # end
#
#     @matches = @question.match( /(-?\d+) (plus|minus) (-?\d+)( (plus|minus) (-?\d+))?/ )
#
#     # If there is nothing in the @matches variable we know that the regex hasn't found a match and we can run an error.
#     @matches.nil? ? ( raise ArgumentError, "That's too complicated!" ) : @matches
#
#     @num1 = @matches[1].to_i
#     @operator = @matches[2]
#     @num2 = @matches[3].to_i
#     @operator2 = @matches[5]
#     @num3 = @matches[6].to_i
#
#   end
#
#   def summer a, b, operator
#     if operator == "plus"
#       result = a + b
#     else
#       result = a - b
#     end
#
#     result
#   end
#
#   def answer
#     # if @operator2.nil?
#     if @matches[4].nil?
#       # binding.pry
#       return summer @num1, @num2, @operator
#     else
#       # binding.pry
#       part_one = summer @num1, @num2, @operator
#       return summer part_one, @num3, @operator2
#     end
#   end
#
# end
#



# class WordProblem
#   # The test will generate a new instance of this class
#
#   def initialize question
#     #  You'll probably need this...
#   end
#
#   #  You'll maybe need some internal methods. Up to you...
#
#   def answer
#     # You certasinly need this - it's referred to in the test file.
#   end
#
# end
