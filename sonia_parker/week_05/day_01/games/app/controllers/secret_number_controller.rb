class SecretNumberController < ApplicationController
  def index
    @number = params[:number]
    if @number ==7.to_s
      @correct = true
    else
      @correct = false
    end
  end

end
