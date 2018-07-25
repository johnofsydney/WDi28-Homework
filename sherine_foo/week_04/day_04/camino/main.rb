require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

#index
get '/caminos' do
  @caminos = query_db 'SELECT * FROM caminos'
  erb :caminos_index
end

#New
get '/caminos/new' do
  erb :caminos_new
end

#create
post '/caminos' do
  query_db "INSERT INTO caminos(day, city, image) VALUES ('#{ params[:day]}', '#{ params[:city]}', '#{ params[:image]}')"
  redirect to ('/caminos')
end


#show
get '/caminos/:id' do
  @camino = query_db "SELECT * FROM caminos WHERE id=#{ params[:id]}"
  @camino = @camino.first
  erb :caminos_show
end

#EDIT
get '/caminos/:id/edit' do
  @camino = query_db "SELECT * FROM caminos WHERE id=#{ params[:id] }"
  @camino = @camino.first
  erb :caminos_edit
end

#updte
post '/caminos/:id' do
  query_db "UPDATE caminos SET day='#{ params[:day]}', city = '#{ params[:city]}', image = '#{ params[:image]}' WHERE id=#{ params[:id]}"
  redirect to ("/caminos/#{ params[:id]}")
end

#delete
get '/caminos/:id/delete' do
  query_db "DELETE FROM caminos WHERE id=#{ params[:id]}"
  redirect to('/caminos')
end


def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  db.close
  results
end
