require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require 'pry'

#get homepage
get '/' do
  erb :home
end

# get index
get '/almanac' do
  @cacti = query_db 'SELECT * FROM cacti'
  erb :almanac_index
end
# homepage image
# get '/' do
#    @cacti = query_db "SELECT * FROM cacti"
#   erb :home
# end
# new (needs to come before /cacti/:id)
get '/almanac/new' do
  erb :almanac_new
end

# Create post
post '/almanac' do
  query_db "INSERT INTO cacti (name, family, image) VALUES ('#{ params[:name] }', '#{ params[:family] }', '#{ params[:image] }')"
  redirect to('/almanac') # This will be a GET request
end

# get show
get '/almanac/:id' do
  @cacti = query_db "SELECT * FROM cacti WHERE id=#{ params[:id] }"
  @cacti = @cacti.first # Strip off the outer array
  erb :almanac_show
end

# Get edit
get '/almanac/:id/edit' do
  @cacti = query_db "SELECT * FROM cacti WHERE id=#{ params[:id] }"
  @cacti = @cacti.first
  erb :almanac_edit
end

# Update post
post '/almanac/:id' do
  query_db "UPDATE cacti SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{params[:id]}"
  redirect to("/almanac/#{ params[:id] }")
end

# Delete
get '/almanac/:id/delete' do
  query_db "DELETE FROM cacti WHERE id=#{ params[:id] }"
  redirect to('/almanac') # GET request for delete
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement

  puts sql_statement #  for debugging

  db.close # Prevent leaving too many connections open
  results # Implicitly returned
end
