class MountainsController < ApplicationController

  def home
    @mountains = Mountain.all
  end

  def details
    @mountain = Mountain.find params[:id]
  end

  def new

  end

  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.elevation = params[:elevation]
    mountain.prominence = params[:prominence]
    mountain.image = params[:image]
    mountain.funfact = params[:funfact]
    mountain.save
    # raise 'hell'
    redirect_to "/mountains/#{mountain.id}"
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to "/"
  end

  def edit
    @mountain = Mountain.find params[:id]

  end

  def update
    mountain = Mountain.find params[:id]
    mountain.name = params[:name]
    mountain.elevation = params[:elevation]
    mountain.prominence = params[:prominence]
    mountain.image = params[:image]
    mountain.funfact = params[:funfact]
    mountain.save
    # raise 'hell'
    redirect_to "/mountains/#{mountain.id}"
  end
end
