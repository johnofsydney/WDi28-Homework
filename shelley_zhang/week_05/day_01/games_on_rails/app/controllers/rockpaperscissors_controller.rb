class RockpaperscissorsController < ApplicationController

  def form
    render :form
  end

  def info
    options = ["rock", "paper", "scissors"]
    @userinput = params[:throw]
    @computer_play = options[rand(options.length)]

    if @computer_play == @userinput
      puts "it's a draw, press back to play again"
      render :draw
    elsif @computer_play == "rock" && @userinput == "scissors"
      puts "you lose"
      render :info
    elsif @computer_play == "rock" && @userinput == "paper"
      puts "you win"
      render :win
    elsif @computer_play == "scissors" && @userinput == "rock"
      puts "you win"
      render :win
    elsif @computer_play == "scissors" && @userinput == "paper"
      puts "you lose"
      render :info
    elsif @computer_play == "paper" && @userinput == "scissors"
      puts "you win"
      render :win
    elsif @computer_play == "paper" && @userinput == "rock"
      puts "you lose"
      render :info
    end
    #get the user input value
    end
  end

  #%w(rock, paper, scissors).sample will create array and randomly choose from the array
