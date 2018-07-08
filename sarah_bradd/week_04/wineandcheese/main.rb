require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

#activerecord validates objects. ::operator that lets you access constant, module or class defined inside another class. base =
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

#classes

class Wine < ActiveRecord::Base
  belongs_to :cheese, :optional => true
end

class Cheese < ActiveRecord::Base
  has_many :wines
end

ActiveRecord::Base.logger = Logger.new(STDERR) #save information to log files at runtime.


get '/' do
  erb :home
end

#index wine_type
  get '/wines' do #indicating to get all wine types within the class of wines to make the index. family tree etc
    @wines = Wine.all  #this class include all wine types in the index
    erb :wines_index
  end


#new
get '/wines/new' do
  @cheeses = Cheese.all
  erb :wines_new
end


#create - allows the user to post their wines
post '/wines' do
  wine = Wine.new
  wine.wine_type = params[:wine_type]
  wine.name = params[:name]
  wine.region = params[:region]
  wine.image = params[:image]
  wine.cheese_id = params[:cheese_id]
  wine.save
  redirect to ("/wines/#{ wine.id }") # this will be a get request
end

#show
get '/wines/:id' do
  @wine = Wine.find params[:id]
  erb :wines_show
end

#edit
get '/wines/:id/edit' do
  @wine = Wine.find params[:id]
  erb :wines_edit
end

post '/wines/:id' do
  wine = Wine.find params[:id]
  wine.type = params[:type]
  wine.name = params[:name]
  wine.region = params[:region]
  wine.image = params[:image]
  wine.wines_id = params[:wines_id]
redirect to ("wines/#{ wine.id }")
end

#delete
get '/wines/:id/delete' do
  @wine = Wine.find params[:id]
  wine.destroy
  redirect to ('/wines')
end
#index

 get '/cheeses' do
   @cheeses = Cheese.all
   erb :cheeses_index

 end

 get '/cheeses/new' do
   @cheeses = Cheese.new
   erb :cheeses_new
 end

 #create
 post '/cheeses' do
 cheese = Cheese.new
cheese.name = params[:name]
cheese.image = params[:image]
cheese.save
redirect to ("/cheeses/#{ cheese.id}")
end


 get '/cheeses/:id' do
   @cheese = Cheese.find params[:id]
   erb :cheeses_show
 end

 get '/cheeses/:id/edit' do
 @cheese = Cheese.find params[:id]
 erb :cheeses_edit
end

#update
post '/cheeses/:id' do
  cheese = Cheese.find params[:id]
  cheese.name = params[:name]
  cheese.image = params[:image]
  cheese.save
  redirect to ("/cheeses/#{ cheese.id }")
end

# delete
get '/cheeses/:id/delete' do
  cheese = Cheese.find params[:id]
  cheese.destroy
  redirect to ('/cheeses')
end

get '/pry' do
  binding.pry #wouldnt have this in your real code as someone can crash your server.
end
