class BallsController < ApplicationController
  def form
    render :form
  end

  def info
    answer = ["It is certain.", "It is decidedly so.","Reply hazy, try again", "Better not tell you now.","My reply is no.","Concentrate and ask again.","Yes - definitely."].sample(1).first
    @answer = answer
    render :info
  end
end
