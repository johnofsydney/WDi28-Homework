class SecretNumberController < ApplicationController

  def guess

  end

  def answer
    @randomNumber = rand(1..10)
    @guessedNumber = params[:num].to_i
  
  end
end
