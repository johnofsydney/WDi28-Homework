require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

#Index - complete list of games

get '/videogames' do
  @videogames = query_db 'SELECT * FROM videogames'
  erb :videogames_index
end

#New
get '/videogames/new' do
  erb :videogames_new
end

#create
post '/videogames' do
  query_db "INSERT INTO videogames (name, completed, image) VALUES ('#{ params[:name] }', '#{ params[:completed] }', '#{ params[:image] }')"
  redirect to('/videogames') # This will be a GET request
end #this will be a get request

#show
get '/videogames/:id' do
  @videogame = query_db "SELECT * FROM videogames WHERE id=#{params[:id]}"
  @videogame = @videogame.first #strip off the outer array
  erb :videogames_show
end

#edit
get '/videogames/:id/edit' do
  # params[:id]
  @videogame = query_db "SELECT * FROM videogames WHERE id=#{ params[:id]}"
  @videogame = @videogame.first
  erb :videogames_edit
end


#Update
post '/videogames/:id' do
  query_db "UPDATE videogames SET name='#{ params[:name] }', completed='#{ params[:completed] }', image='#{ params[:image] }' WHERE id =#{params[:id]}"
  redirect to("/videogames/#{ params[:id] }")
end

#delete
get '/videogames/:id/delete' do
  query_db "DELETE from videogames WHERE id=#{params[:id]}"
  redirect to("/videogames")
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  puts sql_statement #optional bonus feature for debugging
  db.close #close the connection to the database once we hv what we need. prevent leaving too many connections open
  results #implicitly returned
end
