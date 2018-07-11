class OceansController < ApplicationController

def index
  @oceans = Ocean.all
end

#show

def show
  @ocean = Ocean.find params[:id]
end

def new
end

#create

def create
  ocean = Ocean.new
  ocean.name = params[:name]
  ocean.image = params[:image]
  ocean.surface = params[:surface]
  ocean.depth = params[:depth]
  ocean.volume = params[:volume]
  ocean.save
  redirect_to ocean_path(ocean.id)
end

#edit
def edit
  @ocean = Ocean.find params[:id]
end

#update
def update
  ocean = Ocean.find params[:id]
  ocean.name = params[:name]
  ocean.image = params[:image]
  ocean.surface = params[:surface]
  ocean.depth = params[:depth]
  ocean.volume = params[:volume]
  ocean.save
  redirect_to ocean_path(ocean.id)
end

#delete
def destroy
  ocean = Ocean.find params[:id]
  ocean.destroy
  redirect_to oceans_path(ocean.id)
end

end
