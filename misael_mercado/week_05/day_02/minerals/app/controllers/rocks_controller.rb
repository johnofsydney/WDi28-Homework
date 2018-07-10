class RocksController < ApplicationController
  def home

  end

  def index
    @rocks = Rock.all
  end

  def show
    @rock = Rock.find params[:id]
  end

  def new
  end

  def create
  rock = Rock.new
  rock.name = params[:name]
  rock.image = params[:image]
  rock.colour = params[:colour]
  rock.density = params[:density]
  rock.composition = params[:composition]
  rock.locality = params[:locality]
  rock.save # adding new rocks
  redirect_to rock_path(rock.id)

  end

  def edit
    @rock = Rock.find params[:id]
  end

  def update
    rock = Rock.find params[:id]
    rock.name = params[:name]
    rock.image = params[:image]
    rock.colour = params[:colour]
    rock.density = params[:density]
    rock.composition = params[:composition]
    rock.locality = params[:locality]
    rock.save # adding new rocks
    redirect_to rock_path(rock.id)
  end

  def destroy
    rock = Rock.find params[:id]
    rock.destroy
    redirect_to rocks_path
  end

end
