require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

class Film < ActiveRecord::Base
  belongs_to :director, :optional => true # required since Rails 5
end

class Director < ActiveRecord::Base
  has_many :films
end

get '/' do
  erb :home
end

# Index
get '/directors' do
  @directors = Director.all
  # binding.pry
  erb :directors_index
end

# New (needs to come before /directors/:id)
get '/directors/new' do
  erb :directors_new
end

# Create
post '/directors' do
  director = Director.new
  director.name = params[:name]
  director.film = params[:film]
  director.save # An ID will be added to our object
  redirect to("/directors/#{ director.id }") # This will be a GET request
end

# Show
get '/directors/:id' do
  @director = Director.find params[:id]
  erb :directors_show
end

# Edit
get '/directors/:id/edit' do
  @director = Director.find params[:id]
  erb :directors_edit
end

# Update
post '/directors/:id' do
  director = Director.find params[:id]
  director.name = params[:name]
  director.film = params[:film]
  director.save
  redirect to("/directors/#{ director.id }")
end

# Delete
get '/directors/:id/delete' do
  director = Director.find params[:id]
  director.destroy
  redirect to('/directors') # Another GET request
end
