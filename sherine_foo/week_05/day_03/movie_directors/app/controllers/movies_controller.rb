class MoviesController < ApplicationController
  def index
    @movies = Movie.all
  end

  def show
    @movie = Movie.find params[:id]
  end

  def edit
    @movie = Movie.find params[:id]
  end


  def update
    movie = Movie.find params[:id]
    movie.update movie_params
    redirect_to movie
  end


    def new
      @movies = Movie.new
    end


  def create
    movie = Movie.create movie_params
    redirect_to movie
  end

  def destroy
    movie = Movie.find params[:id]
    movie.destroy
    redirect_to movie_path
  end

  private
  def movie_params
    params.require(:movie).permit(:title, :genre, :rating, :image, :directo_id)
  end
end
