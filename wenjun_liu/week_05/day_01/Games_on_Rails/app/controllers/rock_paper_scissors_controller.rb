class RockPaperScissorsController < ApplicationController
  def homepage
    render :homepage
  end

  def result
    @pc = ["rock","paper","scissors"].sample
    case params[:play]
    when "rock"
      case @pc
      when "rock"
        @result = "draw"
      when "paper"
        @result = "lose"
      when "scissors"
        @result = "win"
      end
    when "paper"
      case @pc
      when "rock"
        @result = "win"
      when "paper"
        @result = "draw"
      when "scissors"
        @result = "lose"
      end
    when "scissors"
      case @pc
      when "rock"
        @result = "lose"
      when "paper"
        @result = "win"
      when "scissors"
        @result = "draw"
      end
    end
    render :result
  end
end
