class RockpaperscissorsController < ApplicationController

  def form
    render :form
  end

  def info
    options = ["rock", "paper", "scissors"]
    @userinput = params[:throw]
    @computer_play = options[rand(options.length)]
    if @computer_play == @userinput
      render :win
    else
      render :info
    #get the user input value
    end
  end
end
