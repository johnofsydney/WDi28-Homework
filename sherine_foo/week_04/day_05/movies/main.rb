require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger =
Logger.new(STDERR)

class Movie < ActiveRecord::Base
  belongs_to :director, :optional => true
end

class Director < ActiveRecord::Base
  has_many :movies
end

get '/' do
  erb :home
end

#index
get '/movies' do
  @movies = Movie.all
  erb :movies_index
end

#new
get '/movies/new' do
  erb :movies_new
end

#CREATE
post '/movies/new' do  # added /new but where is the new directory goes?
  movie = Movie.new
  movie.name = params[:name]
  movie.genre = params[:genre]
  movie.image = params[:image]
  movie.director_id = params[:director_id]
  movie.save
  redirect to ("/movies/#{movie.id}")
end

#show
get '/movies/:id' do
  @movie = Movie.find params[:id]
  erb :movies_show
end

#edit
get '/movies/:id/edit' do
  @movie = Movie.find params[:id]
  erb :movies_edit
end

#update
post '/movies/:id' do
  movie = Movie.find params[:id]
  movie.name = params[:name]
  movie.genre = params[:genre]
  movie.image = params[:image]
  movie.director_id = params[:director_id]
  movie.save
  redirect to ("/movies/#{ movie.id }")
end

#delete
get '/movies/:id/delete' do
  movie = Movie.find params[:id]
  movie.destroy
  redirect to('/movies')
end

#director index
get '/directors' do
  @directors = Director.all
  erb :directors_index
end

#new directors
get 'directors/new' do
  erb :directors_new
end

#Create directors
post '/directors' do
  director = Director.new
  director.name = params[:name]
  director.image = params[:image]
  director.save
  redirect to ("directors/#{ director.id }")
end

#show directors
get '/directors/:id' do
  @director = Director.find params[:id]
  erb :directors_show
end

#edit
get 'directors/:id/edit' do
  @director = Director.find params[:id]
  erb :directors_edit
end

#Update
post '/directors/:id' do
  director = Director.find params[:id]
  director.name = params[:name]
  director.image = params[:image]
  director.save
  redirect to ("directors/#{director.id}")
end

#Delete
get 'directors/:id/delete' do
  director = Director.find params[:id]
  director.destroy
  redirect to('/directors')
end
