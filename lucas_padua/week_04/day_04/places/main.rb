require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require 'pry'

get '/' do
  erb :home
end

# Index
get '/places' do
  @places = query_db 'SELECT * FROM places'
  erb :places_index
end

#New
get '/places/new' do
  erb :places_new
end

# Create
post '/places' do
  query_db "INSERT INTO places (name, location, image) VALUES ('#{ params[:name] }', '#{ params[:location] }', '#{ params[:image] }')"
  redirect to('/places')
end

# Show
get '/places/:id' do
  @place = query_db "SELECT * FROM places WHERE id=#{ params[:id] }"
  @place = @place.first
  erb :places_show
end

# Edit
get '/places/:id/edit' do
  @place = query_db "SELECT * FROM places WHERE id=#{ params[:id] }"
  @place = @place.first
  erb :places_edit
end
# Update
post '/places/:id' do
  query_db "UPDATE places SET name='#{ params[:name] }', location='#{ params[:location] }', image='#{ params[:image] }' WHERE id=#{params[:id]}"
  redirect to("/places/#{ params[:id] }")
end
# Delete
get '/places/:id/delete' do
  query_db "DELETE FROM places WHERE id=#{ params[:id] }"
  redirect to('/places')
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement

  puts sql_statement

  db.close
  results
end
