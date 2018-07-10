class RockPaperScissorsController < ApplicationController


  def start

  end

  def display
    @play = params[:throw]
    @player2 = [
      "rock","paper",
      "scissors"].sample()
  end

end
