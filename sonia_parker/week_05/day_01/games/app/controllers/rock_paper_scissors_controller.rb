class RockPaperScissorsController < ApplicationController
  def index
    @your_throw = params[:throw]
    @computer_throw = "rock"
    if @your_throw == @computer_throw
      @winner = "its a draw!!!"
    elsif @your_throw == "paper"
      @winner = "you win"
    else
      @winner = "computer wins"
    end
  end
end
