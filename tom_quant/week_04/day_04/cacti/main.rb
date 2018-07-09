
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'


get '/' do
  @cacti = query_db 'SELECT * FROM cacti'
  erb :home
end

get '/cacti' do
  @cacti = query_db 'SELECT * FROM cacti'

  erb :cacti_index
end

get '/cacti/new' do
@cacti = query_db 'SELECT * FROM cacti'
erb :cacti_new
end

post '/cacti' do
  query_db "INSERT INTO cacti (name, family, image) VALUES ('#{params[:name]}', '#{params[:family]}', '#{params[:image]}')"
  redirect to ('/cacti') #this will be a get request
end

get '/cacti/:id' do
  @cacti1 = query_db "SELECT * FROM cacti WHERE id=#{params[:id]}" # returns array with hash inside
  @cacti1 = @cacti1.first # get the hash inside the array

  erb :cacti_show
end

get '/cacti/:id/edit' do
  @cacti1 = query_db "SELECT * FROM cacti WHERE id=#{params[:id]}" # returns array with hash inside
  @cacti1 = @cacti1.first # get the hash inside the array

 erb :cacti_edit
end


get '/cacti/:id/delete' do
query_db "DELETE FROM cacti WHERE id=#{params[:id]}"
redirect to ('/cacti')
end


post '/cacti/:id' do
  query_db "UPDATE cacti SET name='#{ params[:name] }', family='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{params[:id]}"
  redirect to("/cacti/#{ params[:id] }")
end



def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement
  puts sql_statement
  db.close
  results
end
