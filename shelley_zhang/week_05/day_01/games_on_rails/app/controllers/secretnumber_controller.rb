class SecretnumberController < ApplicationController

  def form
    render :form
  end

  def info
    @random_number = rand(10)
    #get the user input value
    @userinput = params[:number].to_i
    if @random_number == @userinput
      render :win
    else
      render :info
    end
  end
end
