class MountainsController < ApplicationController

  def index
    #next need to define global var for info contained in mountains.
    @mountains = Mountain.all
  end

  def show
    #need to GET/FIND the mountain by its params, want to use @mountain singular as it just related to ONE mountain when you SHOW it.
    @mountain = Mountain.find params[:id]
  end

  def new
  end

  def create
      #new is where the form is .. need to get everything from the form and post it through to page...same stuff we did in pry to create other two  mountains.
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.height = params[:height]
    mountain.volcanic = params[:volcanic]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.height = params[:height]
    mountain.volcanic = params[:volcanic]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end

end
