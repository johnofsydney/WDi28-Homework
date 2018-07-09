require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require 'pry'

get '/' do
  erb :home
end

#Index (info from database)
get '/models' do
  @models =query_db 'SELECT * FROM models'
  erb :models_index
end

#New action
get '/butterflies/new' do
  erb :butterflies_new
end

#Create
get '/models' do
  query_db "INSERT INTO models (makes, models, year, image) VALUES ('#{ params[:makes] }','#{ params[:models] }','#{ params[:models] }','#{ params[:image]}')"
redirect to ('/models')
end

#Show
get '/models/:id' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  @models= query_db "SELECT * FROM models WHERE id=#{ params[:id] }"
  @models = @models.first # Strip off the ouiter array
  erb :models_show
end
