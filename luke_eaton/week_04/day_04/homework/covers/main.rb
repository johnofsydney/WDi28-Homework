require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require 'pry'

get '/' do
  erb :home
end

# Index
get '/covers' do
  @covers = query_db 'SELECT * FROM covers'
  erb :covers_index
end

# New (needs to come before /covers/:id)
get '/covers/new' do
  erb :covers_new
end

# Create
post '/covers' do
  query_db "INSERT INTO covers (artist, album, image) VALUES ('#{ params[:artist] }', '#{ params[:album] }', '#{ params[:image] }')"
  redirect to('/covers') # This will be a GET request
end

# Show
get '/covers/:id' do
  @cover = query_db "SELECT * FROM covers WHERE id=#{ params[:id] }"
  @cover = @cover.first # Strip off the outer array
  erb :covers_show
end

# Edit
get '/covers/:id/edit' do
  @cover = query_db "SELECT * FROM covers WHERE id=#{ params[:id] }"
  @cover = @cover.first
  erb :covers_edit
end

# Update
post '/covers/:id' do
  query_db "UPDATE covers SET artist='#{ params[:artist] }', album='#{ params[:album] }', image='#{ params[:image] }' WHERE id=#{params[:id]}"
  redirect to("/covers/#{ params[:id] }")
end

# Delete
get '/covers/:id/delete' do
  query_db "DELETE FROM covers WHERE id=#{ params[:id] }"
  redirect to('/covers') # Another GET request
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'covers.db'
  db.results_as_hash = true
  results = db.execute sql_statement

  puts sql_statement # Optional bonus feature for debugging

  db.close # Prevent leaving too many connections open
  results # Implicitly returned
end
