class OceansController < ApplicationController
def index # lit of all oceans
  @oceans = Ocean.all
end
def new # form for creating

end

def create # code for saving newly created ocean
  ocean = Ocean.new
ocean.name = params[:name]
ocean.image_url = params[:image_url]
ocean.average_depth = params[:average_depth]
ocean.save
redirect_to ocean_path(ocean.id)
end

  def show # show id of ocean with image
        @ocean = Ocean.find params[:id]
  end

  def edit # form for editing existing ocean
  @ocean = Ocean.find params[:id]
  end

  def update # save edited ocean
  @ocean = Ocean.find params[:id]
  @ocean.name = params[:name]
  @ocean.image_url = params[:image_url]
  @ocean.average_depth = params[:average_depth]
  @ocean.save
  redirect_to ocean_path(@ocean.id)
  end

  def destroy
    @ocean = Ocean.find params[:id]
    @ocean.destroy
    redirect_to oceans_path
  end
end
