class DirectorsController < ApplicationController
  def index
    @directors = Director.all.order(:created_at)
  end

  def show
    @director = Director.find params[:id]
  end

  def edit
    @director = Director.find params[:id]
  end

  def update
    director = Director.find params[:id]
    director.update director_params
    redirect_to director
  end

  def new
    @director = Director.new
  end

  def create
    director = Director.create director_params
    # director = Director.create :name => params[:director][:name], :nationality => params[:director][:nationality], :dob => params[:director][:dob], :image => params[:director][:image]
    redirect_to director
  end

  def destroy
    director = Director.find params
    director.destroy
    redirect_to director_path
  end

  private
  def director_params
    params.require(:director).permit(:name, :nationality, :dob, :image )

  end


end
