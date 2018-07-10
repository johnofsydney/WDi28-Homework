class RockPaperScissorsController < ApplicationController
	def game
		@app = ["rock", "paper", "scissors"].sample
		@user_input = params[:throw]



		if ((@app == "rock" && @user_input == "scissors") ||
			(@app == "scissors" && @user_input == "paper") ||
			(@app == "paper" && @user_input == "rock"))

			@result = "You lost!"


		elsif ((@user_input == "rock" && @app == "scissors") ||
			(@user_input == "scissors" && @app == "paper") ||
			(@user_input == "paper" && @app == "rock"))

			@result = "You won!"

		else
			@result = "Draw"
		end
	end
end
