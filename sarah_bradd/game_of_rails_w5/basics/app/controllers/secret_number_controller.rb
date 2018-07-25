class NumbersController < ApplicationController
 def form
   render :form
 end

 def info

   random_number = (1..10).to_a.sample(1).first
   # @answer = answer
   # if answer = [:number]
   # end
   guessed_number = params["number"].to_i
    if random_number == guessed_number
      @answer = " YOU WIN"
     else
      @answer = "YOU LOSE"

     end

   render :info
 end
end unless from_mod.const_defined?(const_name, false)
