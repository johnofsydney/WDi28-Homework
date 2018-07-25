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
  has_many :songs
end

get "/" do
  erb :home
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
  song.album_id = params[:album_id]
  song.save #an id will be added to the object
  redirect to("/songs/#{song.id}") #this will be a get request
end


#show
get "/songs/:id" do
  @song = Song.find params[:id]
  @album = Album.find @song[:album_id]
  erb :songs_show
end

#edit
get "/songs/:id/edit" do
  @song = Song.find params[:id]
  erb :songs_edit
end

#update
post "/songs/:id" do
  song = Song.find params[:id]
  song.name = params[:name]
  song.youtube_url = params[:youtube_url]
  song.album_id = params[:album_id]
  song.save
  redirect to("/songs/#{song.id}")
end


#delete
get "/songs/:id/delete" do
  song = Song.find params[:id]
  song.destroy
  redirect to ("/songs") #another get request
end


#*****************ALBUMS ROUTES****************
#index for albums
get "/albums" do
  @albums = Album.all
  erb :albums_index
end
#new
get "/albums/new" do
  erb :albums_new
end

#create
post "/albums" do
  album = Album.new
  album.name = params[:name]
  album.release_year = params[:release_year]
  album.cover_url = params[:cover_url]
  album.save
  redirect to ("/albums/#{album.id}")
end

#show
get "/albums/:id" do
  @album = Album.find params[:id]
  erb :albums_show
end

#edit
get "/albums/:id/edit" do
  @album = Album.find params[:id]
  erb :albums_edit
end

#update
post "/albums/:id" do
  album = Album.find params[:id]
  album.name = params[:name]
  album.release_year = params[:release_year]
  album.cover_url = params[:cover_url]
  album.save
  redirect to ("/albums/#{album.id}")
end

#Delete
get "/albums/:id/delete" do ## TODO: delete all songs for this album first
  album = Album. find params[:id]

  # Before deleting the album, we first delete all songs with albums
  songs = Song.where(album_id: params[:id]).destroy_all

  album.destroy
  redirect to("/albums")
end

get "/pry" do
  binding.pry #naughty stuffff
end
