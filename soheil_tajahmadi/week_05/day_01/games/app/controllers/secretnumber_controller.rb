class SecretnumberController < ApplicationController
  def game

    render :game
  end

  def result
    @secret_number = Random.rand(1..10)

    @guessed_number = params[:guess].to_i

    render :result
  end

end
