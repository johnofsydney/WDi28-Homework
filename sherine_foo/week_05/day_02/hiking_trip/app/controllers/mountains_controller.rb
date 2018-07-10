class MountainsController < ApplicationController

  def index
    @mountains = Mountain.all
  end

def show
  @mountain = Mountain.find params[:id]
end

  def new
  end


  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.height = params[:height]
    mountain.distance = params[:distance]
    mountain.country = params[:country]
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
    mountain.distance = params[:distance]
    mountain.country = params[:country]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mounatin.destroy
    redirect_to mountains_path
  end

end
