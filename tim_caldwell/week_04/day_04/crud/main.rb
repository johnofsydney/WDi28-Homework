require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

def query_db ( query_string )
  db = SQLite3::Database.new 'database.db'
  db.results_as_hash = true

  result = db.execute query_string
  db.close

  result
end


get '/' do
  erb :home
end


get '/games' do
  @games = query_db "SELECT * FROM games"
  erb :games
end

post '/games' do
  values = "'#{params[:title]}','#{params[:genre]}','#{params[:blurb]}','#{params[:art]}'"
  query_db "INSERT INTO games (title,genre,blurb,art) VALUES (#{values})"

  redirect to('/games')
end

get '/games/new' do
  erb :games_new
end

get '/games/:id/edit' do
  id = params['id']
  @game = query_db "SELECT * FROM games WHERE id=#{id}"
  @game = @game.first
  erb :games_update
end

get '/games/:id/delete' do
  query_db "DELETE FROM games WHERE id=#{params[:id]}"
  redirect to('/games')
end

post '/games/:id' do
  values = "title='#{params[:title]}',genre='#{params[:genre]}',blurb='#{params[:blurb]}',art='#{params[:art]}'"
  query_db "UPDATE games SET #{values} WHERE id=#{params[:id]}"

  redirect to("/games/#{params[:id]}")
end

get '/games/:id' do
  id = params['id']
  @game = query_db "SELECT * FROM games WHERE id=#{id}"
  @game = @game.first
  erb :games_show
end