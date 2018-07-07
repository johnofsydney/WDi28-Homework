require "sinatra"
require "sinatra/reloader"
require "sqlite3"
require "active_record"

require "pry"

#config the ActiveRecord Module
ActiveRecord::Base.establish_connection(
  :adapter => "sqlite3",
  :database => "database.sqlite3"
)
class Song < ActiveRecord::Base
  belongs_to :album, :optional =>true
end

class Album < ActiveRecord::Base
  has_many :butterflies
end

get "/" do
  erb: home
end

#Index
get "/songs" do
  @songs = Song.all
  erb :songs_index
end

#New - needs to come before /butterflies/:#id
get "/songs/new" do
  erb :songs_new
end


#Create
post "/songs" do
  song = Song.new
  song.name = params[:name]
  song.youtube_url = params[:youtube_url]
  song.album_id = params [:album_id]
  song.save #an id will be added to the object
  redirect to("/songs/#{song.id}") #this will be a get request
end


#show
get "/song/:id" do
  @song = Song.find params[:id]
  erb :songs_show
end
#edit
get "/songs/:id/edit" do
  @song = Song.find params [:id]
  erb :songs_edit
end
#update
post "/songs/:id" do
  song = Song.find params [:id]
  song.name = params [:name]
  song.youtube_url = params[:youtube_url]
  song.album_id = params [:album_id]
  song.save
  redirect to("/songs/#{song.id}")
end
#delete
get "/songs/:id/delete" do
  song = Song.find params[:id]
  song.destroy
  redirect to ("/songs") #another get request
end
