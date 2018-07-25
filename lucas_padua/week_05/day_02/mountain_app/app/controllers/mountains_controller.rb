class MountainsController < ApplicationController

  def index
    @mountains = Mountain.all
  end


  def new
    end



end
