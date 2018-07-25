class SecretController < ApplicationController
  def form
    render :form
  end

  def game

    secret_number = Random.rand(1..10)
    guess = params["guess"].to_i

      if guess == secret_number
        @message = "You are right, secret number is #{guess} "
      else
        @message = "Sorry wrong number, try again"
      end

    render :answer
  end

end
