class RockPaperScissorsController < ApplicationController
  def rock_paper_scissors
    render :index
  end

  def result

    @value = params[:guess]
    @opponent = %w[rock paper scissors].sample

    render :result
  end

end
