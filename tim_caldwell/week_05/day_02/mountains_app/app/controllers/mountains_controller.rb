class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all.order(height: :desc)
    @tallest_height = @mountains.first.height
    @shortest_height = @mountains.last.height
    render :index
  end

  def show
    @m = Mountain.find(params[:id])
  end

  def new
  end

  def add
    m = Mountain.create(
      :name => params[:name],
      :image => params[:image],
      :latitude => params[:latitude],
      :longitude => params[:longitude],
      :height => params[:height]
    )

    redirect_to mountain_path(m.id)
  end

  def destroy
    Mountain.find(params[:id]).destroy

    redirect_to mountains_path
  end

  def edit
    @m = Mountain.find(params[:id])
  end

  def update
    @m = Mountain.find(params[:id])
    @m.name = params[:name]
    @m.image = params[:image]
    @m.latitude = params[:latitude]
    @m.longitude = params[:longitude]
    @m.height = params[:height]
    @m.save

    redirect_to mountain_path(@m.id)
  end
end