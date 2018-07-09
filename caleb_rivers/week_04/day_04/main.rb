require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require "pry"

get "/" do
  erb :home
end

get '/dogs_list' do
  @dogs = query_db "SELECT * FROM dogs"
  erb :dogs_list
end

get '/dogs_list/new' do
  erb :dogs_new
end

get '/dogs_list/:id/edit' do
  @dog = query_db "SELECT * FROM dogs WHERE id=#{params[:id]}"
  @dog = @dog.first
  erb :dogs_edit
end

post '/dogs_list/:id' do
  query_db "UPDATE dogs SET breed='#{params[:breed]}', ranking='#{params[:ranking]}', image = '#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to ("dogs_list/#{params[:id]}")
end

post '/dogs_list' do
  query_db "INSERT INTO dogs (breed, ranking, image) VALUES ('#{params[:breed]}', '#{params[:ranking]}', '#{params[:image]}')"
  redirect to ("/dogs_list")
end

get '/dogs_list/:id' do
  @dog = query_db "SELECT * FROM dogs WHERE id=#{params[:id]}"
  @dog = @dog.first
  @dog.inspect

  erb :dogs_show
end

get "/dogs_list/:id/delete" do
  query_db "DELETE FROM dogs WHERE id=#{params[:id]}"
  redirect to ("/dogs_list")
end


def query_db (sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  puts sql_statement
  db.close
  results
end
