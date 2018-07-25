class SecretnumberController < ApplicationController

  def board
    render :board
  end

  def result
    #generate random Number
    random_number = Random.rand(10) #look up sytax for random rand if you can put (1..10)
    # raise
    if params[:id].to_i == random_number
      @message = "Yay! You got it right!"
    else
      @message = 'Oh no, try again.'
    end
    render :result
  end


end #end of controller.
