require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# db = SQLite3::Database.new("database.db")
get '/' do
  erb :home
end

get '/albums' do
  # list of albums show

  db = SQLite3::Database.new 'eminem.db'
  db.results_as_hash = true
  @albums = db.execute 'SELECT * FROM albums'
  erb :eminem_albums_index
end

# INDEX
get '/albums/new' do
  # this is the form to create an albums
  erb :eminem_albums_new
end

# CREATE
post '/albums' do
  # this is processing to create a new album
  db = SQLite3::Database.new 'eminem.db'
  db.results_as_hash = true
  db.execute "INSERT INTO albums (title, release_year) VALUES ('#{params[:title]}', '#{params[:release_year]}')"
  # redirect back to list of all albums
  redirect to('/albums') # This will be a GET request
end
#READ
get '/albums/:id' do
  db = SQLite3::Database.new 'eminem.db'
  db.results_as_hash = true
  @album = db.execute "SELECT * FROM albums WHERE id = #{params[:id]}"
  @album = @album.first # Strip off the outer array
  erb :eminem_albums_show
  # to read specific album we just created
end

get '/albums/:id/edit' do
  # this is the form for update specific entry/album
end

post '/albums:id' do
  # processing to update an entry
  # redirect back to /albums:id page
end

get '/albums/:id/delete' do
  # this is the form to confirm to delete the album
end

post '/albums/:id/delete' do
  # this is actually deleting the album after the confirmation
  # redirect to list of pages
end
