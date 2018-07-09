class SecretnumberController < ApplicationController

  def form
    render :form
  end

  def info
    @random_number = rand(10)
    #get the user input value
    @userinput = params[:number]
    if @random_number == @userinput
        
        render :info
      # else redirect_to secretnumber_path
    end
  end
end
