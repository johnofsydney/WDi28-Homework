require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require 'pry'



get '/' do
  @all_cars = db_query "SELECT * FROM cars"

  erb :home
end

get '/new' do
  erb :new
end

get '/delete/:id' do
  db_request = "DELETE FROM cars WHERE id=#{params[:id]}"
  db_query db_request
  redirect to('/')
end

post '/details' do
  db_request = "INSERT INTO cars (make,model,hp,image) VALUES('#{params[:make]}','#{params[:model]}','#{params[:hp]}','#{params[:image]}')"

  db_query db_request
  redirect to('/')
end

get '/edit/:id' do
  @car = (db_query "SELECT * FROM cars WHERE id=#{params[:id]}").first

  erb :edit
end

post '/edit/:id' do
  db_request = "UPDATE cars SET make='#{params[:make]}', model='#{params[:model]}', hp='#{params[:hp]}', image='#{params[:image]}' WHERE id = '#{params[:id]}' "
  db_query db_request
  redirect to('/')
end


def db_query db_request
  db =  SQLite3::Database.new('database.db')
  db.results_as_hash = true
  puts db_request
  @db_response = db.execute db_request
  db.close
  @db_response
end
