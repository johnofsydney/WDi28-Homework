class RockController < ApplicationController
  def form
    render :form
  end

def game
  options = ["rock", "paper", "scissors"]
  @userinput = params[:hand]
  @comp_play = options[rand(options.length)]
  if @comp_play == @userinput
    @message = "You match!"
  else
    @message = "Sorry, try again."

  end
  render :answer
end

end
