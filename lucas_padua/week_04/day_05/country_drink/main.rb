require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

require 'pry'

# Rails will do this for you, but meanwhile in Sinatra
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

class Country < ActiveRecord::Base
  belongs_to :drink, :optional => true # required since Rails 5
end

class Drink < ActiveRecord::Base
  has_many :countries
end

get '/' do
  erb :home
end

# Index
get '/countries' do
  @countries = Country.all
  erb :countries_index
end

# New (needs to come before /butterflies/:id)
get '/countries/new' do
  erb :countries_new
end

# Create
post '/countries' do
  country = Country.new
  country.name = params[:name]
  country.image = params[:image]
  country.drink_id = params[:drink_id]
  country.save # An ID will be added to our object
  redirect to("/countries/#{ country.id }") # This will be a GET request
end

# Show
get '/countries/:id' do
  @country = Country.find params[:id]
  erb :countries_show
end

# Edit
get '/countries/:id/edit' do
  @country = Country.find params[:id]
  erb :countries_edit
end

# Update
post '/countries/:id' do
  country = Country.find params[:id]
  country.name = params[:name]
  country.image = params[:image]
  country.drink_ id = params[:drink_id]
  country.save
  redirect to("countries/#{ country.id }")
end

# Delete
get '/countries/:id/delete' do
  country = Country.find params[:id]
  country.destroy
  redirect to('/countries') # Another GET request
end

# Index
get '/drinks' do
  @drinks = Drink.all
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
