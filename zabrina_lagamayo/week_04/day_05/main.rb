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

class Fruit < ActiveRecord::Base
  belongs_to :colour, :optional => true # required since Rails 5
end

class Colour < ActiveRecord::Base
  has_many :fruits
end


# Create Read Update Delete
#home page
get '/' do
  erb :home
end
# the page where all the fruits are shown
get '/fruits' do
  @fruits = Fruit.all
  erb :fruits_index
end

#the new fruits page (form goes here)
get '/fruits/new' do
  erb :fruits_new
end

#posts new fruits to  fruits_index

post '/fruits' do
fruit = Fruit.new
fruit.name = params[:name]
fruit.image = params[:image]
fruit.colour_id = params[:colour_id]
fruit.save
  redirect to ("/fruits/#{ fruit.id }")
end

#show page
get '/fruits/:id' do
  @fruit = Fruit.find params[:id]
  erb :fruits_show
end

#edit
get '/fruits/:id/edit' do
  @fruit = Fruit.find params[:id]
  erb :fruits_edit
end
#update
post '/fruits/:id' do
  fruit = Fruit.find params[:id]
  fruit.name = params[:name]
  fruit.image = params[:image]
  fruit.colour_id = params[:colour_id]
  fruit.save
  redirect to("/fruits/#{ fruit.id }")
end

#Delete
get '/fruits/:id/delete' do
  @fruit = Fruit.find params[:id]
  @fruit.destroy
  redirect to ('/fruits')
end

get '/colours' do
  @colours = Colour.all
  erb :colours_index
end

get '/colours/new' do
  erb :colours_new
end

post '/colours' do
  colour = Colour.new
  colour.name = params[:name]
  colour.image = params[:image]
  colour.save
  redirect to ("/colours/#{colour.id}")
end

#show
get '/colours/:id' do
  @colour = Colour.find params[:id]
  erb :colours_show
end

#Edit

get '/colours/:id/edit' do
  @colour = Colour.find params[:id]
  erb :colours_edit
end
#update
post '/colours/:id' do
  colour = Colour.find params[:id]
  colour.name = params[:name]
  colour.image = params[:image]
  colour.save
  redirect to("/colours/#{ colour.id }")
end




#delete
get '/colours/:id/delete' do
  colour = Colour.find params[:id]
  colour.destroy
  redirect to ('/colours')
end
