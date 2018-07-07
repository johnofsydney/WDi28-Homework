require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

require 'pry'


ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.db'
)

ActiveRecord::Base.logger = Logger.new(STDERR)


class List < ActiveRecord::Base
  has_many :movies
end
class Movie < ActiveRecord::Base
  has_many :lists
end

get '/' do
  erb :home
end

get '/add/movie' do
  erb :new_movie
end

get '/add/list' do
  erb :new_list
end

get '/movies' do
  @movies = Movie.all
  erb :movie_list
end

get '/lists' do
  @lists = List.all
  erb :list_of_lists
end



post '/movies/new' do
  movie = Movie.new
  movie.name = params[:name]
  movie.year = params[:year]
  movie.director = params[:director]
  movie.cast = params[:cast]
  movie.thumbnail = params[:thumbnail]
  movie.save
  redirect to('/movies')
end

post '/movies/update/:id' do
  movie = Movie.find params[:id]
  movie.name = params[:name]
  movie.year = params[:year]
  movie.director = params[:director]
  movie.cast = params[:cast]
  movie.thumbnail = params[:thumbnail]
  movie.save
  redirect to("/movies")

end

post '/lists/new' do
  list = List.new
  list.name = params[:name]
  list.comment = params[:comment]
  list.save
  redirect to('/lists')
end


post '/lists/update/:id' do
  list = List.find params[:id]
  list.name = params[:name]
  list.comment = params[:comment]

  list.save
  redirect to("/lists")

end


post '/movie/edit/:id' do
  @movie = Movie.find params[:id]
  erb :movie_edit
end

post '/movie/delete/:id' do
  movie = Movie.find params[:id]
  movie.destroy
  redirect to("/movies")
end

post '/list/edit/:id' do
  @list = List.find params[:id]
  erb :list_edit
end

post '/list/delete/:id' do
  list = List.find params[:id]
  list.destroy
  redirect to("/lists")
end
