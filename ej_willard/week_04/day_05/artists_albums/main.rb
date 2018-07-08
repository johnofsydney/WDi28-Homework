require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

#bonus - optional
ActiveRecord::Base.logger = Logger.new(STDERR)

class Album < ActiveRecord::Base
  belongs_to :artist, :optional => true #makes it optional to have an artist.
end

class Artist < ActiveRecord::Base
  has_many :albums
end

#homepage - only one - applies to both models
get '/' do
  erb :home
end

####NOTE ALBUMS/BUTTERFLIES HERE

#Index for albums
get '/albums' do
  @albums = Album.all
  erb :albums_index
end

#new albums
get '/albums/new' do
  erb :albums_new
end

#create for albums
post '/albums' do
  album = Album.new
  album.title = params[:title]
  album.year = params[:year]
  album.image = params[:image]
  album.artist_id = params[:artist_id]
  album.save
  redirect to("/albums/#{album.id}")
end

#READ/SHOW ALBUM
get '/albums/:id' do
  @album = Album.find params[:id]
  erb :albums_show
end

#edit albums

get '/albums/:id/edit' do
  @album = Album.find ##NOTE ASK WHY IT IS THIS SYNTAX
  params[:id]
  erb :albums_edit
end

#UPDATE ALBUMS - goes with edit... this is the actual info edit will take
post '/albums/:id' do
  album = Album.find params[:id]
  album.title = params[:title]
  album.year = params[:year]
  album.image = params[:image]
  album.artist_id = params[:artist_id]
  album.save
  redirect to("/albums/#{album.id}")
end

#delete albums

get '/albums/:id/delete' do
  album = Album.find params[:id]
  album.destroy
  redirect to('/albums')
end


###### NOTE ARTISTS/PLANTS HERE
#Index for artists
get '/artists' do
  @artists = Artist.all ##NOTE ASK WHY CAPITAL A
  erb :artists_index
end

#new artists
get '/artists/new' do
  erb :artists_new
end

#create for artists
post '/artists' do
  artist = Artist.new
  artist.name = params[:name]
  artist.image = params[:image]
  artist.save
  redirect to("/arists/#{artist.id}")
end

#READ/SHOW ARTIST
get '/artists/:id' do
  @artist = Artist.find params[:id]
  erb :artists_show
end

#EDIT ARTISTS
get '/artists/:id/edit' do
  @artist = Artist.find params [:id]
  erb :artists_edit
end

#UPDATE ARTISTS - PAIR WITH EDIT< ALWAYS BELOW EDIT
post '/artists/:id' do
  artist = Artist.find params[:id]
  artist.name = params[:name]
  artist.image = params[:image]
  artist.save
  redirect to("/arists/#{artist.id}")
end

#delete artist

get '/artists/:id/delete' do
  artist = Artist.find params[:id]
  artist.destroy
  redirect to('/artists')
end
