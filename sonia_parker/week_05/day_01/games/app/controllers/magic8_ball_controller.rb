class Magic8BallController < ApplicationController
  def index
    @question = params[:question]
    @answer = rand(2)
    if @answer == 1
      @answer = "Yes"
    else
       @answer = "No"
    end
  end
end
