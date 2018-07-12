class SingersController < ApplicationController
  def index
    @singers = Singer.all.order(:created_at)
  end

  def show
    @singer = Singer.find params[:id]
  end

  def edit
    @singer = Singer.find params[:id]
  end

  def update
    singer = Singer.find params[:id]
    singer.update singer_params
    redirect_to singer
  end

  def new
    @singer = Singer.new
  end

  def create
    singer = Singer.create singer_params
    redirect_to singer #GET the show page
  end

  def destroy
    singer = Singer.find params[:id]
    singer.destroy
    redirect_to singers_path

  end

  #Strong params : create a whitelist of permitted parameters
  private
  def singer_params
    params.require(:singer).permit(:name, :background, :genres, :generation, :image)
  end
end
