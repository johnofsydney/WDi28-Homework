class NumberController < ApplicationController
  def number
    render :index
  end

  def result
    @random_number = rand(1..10)
    @button_value = params[:guess].to_i

    render :result
  end
end
