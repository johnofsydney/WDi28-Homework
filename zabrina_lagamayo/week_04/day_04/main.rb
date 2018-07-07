require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'youtube_embed'

# remember Create Read Update Delete

get '/' do
  erb :home
end

get '/instruments' do
  @instruments = query_db 'SELECT * FROM instruments'
  erb :instruments_index
end

get '/instruments/new' do

  erb :instruments_new
end

post '/instruments' do
    query_db "INSERT INTO instruments (name, family, video) VALUES ('#{params[:name]}','#{params[:family]}', '#{params[:video]}')"

    redirect to('/instruments')
end

get '/instruments/:id' do
  @instrument = query_db "SELECT * FROM instruments WHERE id = #{params[:id]} "
  @url =  query_db "SELECT video FROM instruments WHERE id = #{params[:id]} "
  @video = YoutubeEmbed::Video.new("#{@url}")
  @instrument = @instrument.first
  erb :instruments_show
end

get '/instruments/:id/edit' do
  @instrument = query_db "SELECT * FROM instruments WHERE id=#{params[:id]}"
  @url =  query_db "SELECT video FROM instruments WHERE id = #{params[:id]} "
  @video = YoutubeEmbed::Video.new("#{@url}")
  @instrument = @instrument.first
  erb :instruments_edit
end

#Update
post '/instruments/:id' do
  "UPDATE instruments SET name= '#{params[:name]}', family = #{params[:family]}, video = #{params[:video]}' WHERE id=#{params[:id]}"
  redirect to("/instruments/#{params[:id]}")
end
#delete
  get '/instruments/:id/delete' do
    query_db "DELETE FROM instruments WHERE id=#{ params[:id]}"
    redirect to('/instruments')
end


def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  puts sql_statement
  db.close
  results
end
