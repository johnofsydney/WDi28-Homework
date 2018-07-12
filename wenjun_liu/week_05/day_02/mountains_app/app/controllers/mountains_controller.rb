class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
    p @mountains
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new

  end

  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.category = params[:category]
    mountain.country = params[:country]
    mountain.height = params[:height]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.category = params[:category]
    mountain.country = params[:country]
    mountain.height = params[:height]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end
end
