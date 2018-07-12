class SecretNumberController < ApplicationController
  def homepage
    render :homepage
  end

  def result
    @correct = (1..10).to_a.sample
    if params["guess"].to_i == @correct
      @result = true
    else
      @result = false
    end
    render :result
  end
end
