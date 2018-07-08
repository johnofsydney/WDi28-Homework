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
  has_and_belongs_to_many :movies

end

class Movie < ActiveRecord::Base
  has_and_belongs_to_many :lists

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

get '/list/view/:id' do
  @list = List.find params[:id]
  erb :list_view
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

post '/movie/addtolist/:id' do
  @movie_id = params[:id]
  erb :movie_add_to_list
end

post '/list/addmember/:id' do
  movie_id = params[:id]
  list_id = params[:list_id]
  list = List.find list_id
  # binding.pry
  list.movie_ids += [movie_id]
  list.save
  redirect to("/list/view/#{params[:list_id]}")
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
# remving a movie from a list, sent from list_view.erb
post '/list/remove/:id' do

  movie_id = params[:id]
  list = List.find params[:list_id]
    # binding.pry
  list.movie_ids -= [movie_id.to_i]
  list.save
  redirect to("/list/view/#{params[:list_id]}")
end
