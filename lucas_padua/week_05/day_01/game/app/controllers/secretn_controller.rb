class SecretnController < ApplicationController

  def game
    render :game
  end

  def secretnanswer

    secret_number = Random.rand(1..10)

    secretnanswer = params["name"].to_i


    if secret_number == secretnanswer

      @messege = "You got!!!"
    else
      @message = "You got wrong"
    end

    render :result

  end

end
