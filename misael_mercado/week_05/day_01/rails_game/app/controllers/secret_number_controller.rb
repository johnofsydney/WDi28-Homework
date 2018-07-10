class SecretNumberController < ApplicationController

def guess
		@guessed_number = params[:guessed_number].to_i

		if @guessed_number == Random.rand(1...10)
			@result = "Congrats! You have guessed correctly! The number is: #{ @guessed_number }"
		else
			@result = "Sorry! Please guess again!"
		end
	end
end
