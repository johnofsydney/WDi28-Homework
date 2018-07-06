require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require 'pry'

get '/' do
  erb :home
end

# Index
get '/parrots' do
  @parrots = query_db 'SELECT * FROM parrots'
  erb :parrots_index
end

# New (needs to come before /parrots/:id)
get '/parrots/new' do
  erb :parrots_new
end

# Create
post '/parrots' do
  query_db "INSERT INTO parrots (name, scientific name, image) VALUES ('#{ params[:name] }', '#{ params[:'scientific name'] }', '#{ params[:image] }')"
  redirect to('/parrots') # This will be a GET request
end

# Show
get '/parrots/:id' do
  @parrot = query_db "SELECT * FROM parrots WHERE id=#{ params[:id] }"
  @parrot = @parrot.first # Strip off the outer array
  erb :parrots_show
end

# Edit
get '/parrots/:id/edit' do
  @butterfly = query_db "SELECT * FROM parrots WHERE id=#{ params[:id] }"
  @butterfly = @butterfly.first
  erb :parrots_edit
end

# Update
post '/parrots/:id' do
  query_db "UPDATE parrots SET name='#{ params[:name] }', scientific name='#{ params[:'scientific name'] }', image='#{ params[:image] }' WHERE id=#{params[:id]}"
  redirect to("/parrots/#{ params[:id] }")
end

# Delete
get '/parrots/:id/delete' do
  query_db "DELETE FROM parrots WHERE id=#{ params[:id] }"
  redirect to('/parrots') # Another GET request
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement

  puts sql_statement # Optional bonus feature for debugging

  db.close # Prevent leaving too many connections open
  results # Implicitly returned
end
