require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# The Ruby part

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR) # Logs out the Active Record generated SQL in the terminal.

class Writer < ActiveRecord::Base
  belongs_to :drink, :optional => true # required since Rails 5
end

class Drink < ActiveRecord::Base
  has_many :writers
end

# Home page
get '/' do
  erb :home
end

# Index page
get '/writers' do
  @writers = Writer.all
  erb :writers_index
end

# New (needs to come before /writers/:id)
get '/writers/new' do
  erb :writers_new
end

# Create
post '/writers' do
  writer = Writer.new
  writer.name = params[:name]
  writer.life = params[:life]
  writer.image = params[:image]
  writer.drink_id = params[:drink_id]
  writer.save # An ID will be added to our object
  redirect to("/writers/#{ writer.id }") # This will be a GET request
end

# Show
get '/writers/:id' do
  @writer = Writer.find params[:id]
  erb :writers_show
end

# Edit
get '/writers/:id/edit' do
  @writer = Writer.find params[:id]
  erb :writers_edit
end

# Update
post '/writers/:id' do
  writer = Writer.find params[:id]
  writer.name = params[:name]
  writer.life = params[:life]
  writer.image = params[:image]
  writer.drink_id = params[:drink_id]
  writer.save
  redirect to("/writers/#{ writer.id }")
end

# Delete
get '/writers/:id/delete' do
  writer = Writer.find params[:id]
  writer.destroy
  redirect to('/writers') # Another GET request
end

# Index
get '/drinks' do
  @drink = Drink.all
  erb :drinks_index
end

# New
get '/drinks/new' do
  erb :drinks_new
end

# Create
post '/drinks' do
  drink = Drink.new
  drink.name = params[:name]
  drink.recipe = params[:recipe]
  drink.image = params[:image]
  drink.save
  redirect to("/drinks/#{ drink.id }")
end

# Show
get '/drinks/:id' do
  @drink = Drink.find params[:id]
  erb :drinks_show
end

# Edit
get '/drinks/:id/edit' do
  @drink = Drink.find params[:id]
  erb :drinks_edit
end

# Update
post '/drinks/:id' do
  drink = Drink.find params[:id]
  drink.name = params[:name]
  drink.recipe = params[:recipe]
  drink.image = params[:image]
  drink.save
  redirect to("/drinks/#{ drink.id }")
end

# Delete
get '/drinks/:id/delete' do
  drink = Drink.find params[:id]
  drink.destroy
  redirect to('/drinks')
end

get '/pry' do
  binding.pry # This is a bit naughty
end
