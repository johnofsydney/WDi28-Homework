require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record' #ruby gems


#our logic file

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR) #logs out the Active Record generated SQL in the terminal

#create class for videogames note that naming convention for model class is singular with first letter of each word capitalized. Defining the relationship between the two DBs

class Videogame < ActiveRecord::Base
 belongs_to :developer, :optional => true
end

class Developer < ActiveRecord::Base
  has_many :videogames
end

get '/' do #when at this URL, get the contents of home.erb
  erb :home
end

#read/get/select/index
get '/videogames' do
  #@butterflies = query_db 'SELECT * FROM butterflies'
  @videogames = Videogame.all
  erb :videogames_index
end

get '/videogames/new' do
  erb :videogames_new
end #show content of new page which contains the form

#create

post '/videogames' do #input data recevied into videogame based on below params
  videogame = Videogame.new #new method will return a new object but won't save
  videogame.name = params[:name]
  videogame.genre = params[:genre]
  videogame.image = params[:image]
  videogame.developer_id = params[:developer_id]
  videogame.save #ID will be added to my object
  redirect to("/videogames/#{ videogame.id }") #get requesting id of videogame.
end

#show
get '/videogames/:id' do #find game in index based on id and take user to show page that shows the game just added
  @videogame = Videogame.find params[:id]
  erb :videogames_show
end

#edit
get '/videogames/:id/edit' do
  @videogame = Videogame.find params[:id]
  erb :videogames_edit
end

#update
post '/videogames/:id' do
  videogame = Videogame.find params[:id]
  videogame.name = params[:name]
  videogame.genre = params[:genre]
  videogame.image = params[:image]
  videogame.developer_id = params[:developer_id]
  videogame.save
  redirect to("/videogames/#{ videogame.id }")
end

#Delete
get '/videogames/:id/delete' do
  videogame = Videogame.find params[:id]
  videogame.destroy
  redirect to('/videogames')
end

#END OF VIDEOGAMES LOGIC
#START OF DEVELOPER LOGIC

#index

get '/developers' do
  @developers = Developer.all
  erb :developers_index
end

#new
get '/developers/new' do
  erb :developers_new
end

#create
post '/developers' do
  developer = Developer.new
  developer.name = params[:name]
  developer.headquarters = params[:headquarters]
  developer.image = params[:image]
  developer.save
  redirect to("/developers/#{ developer.id }")
end

#show
get '/developers/:id' do
  @developer = Developer.find params[:id]
  erb :developers_show
end

#edit

get '/developers/:id/edit' do
  @developer = Developer.find params[:id]
  erb :developers_edit
end

#update
post '/developers/:id' do
  developer = Developer.find params[:id]
  developer.name = params[:name]
  developer.headquarters = params[:headquarters]
  developer.image = params[:image]
  developer.save
  redirect to("/developers/#{ developer.id }")
end

#delete
get '/developers/:id/delete' do
  developer = Developer.find params[:id]
  developer.destroy
  redirect to('/developers')
end
