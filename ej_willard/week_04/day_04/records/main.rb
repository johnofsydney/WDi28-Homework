require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/records' do
  @records = query_db 'SELECT * FROM records'
  erb :records_index
end

#new page or action
get '/records/new' do
  erb :records_new
end

#CREATE (in crud) - logical pair with new (above)
post '/records' do
  query_db "INSERT INTO records(artist, record_name, record_specs, pressing_year, image) VALUES ('#{params[:artist]}', '#{params[:record_name]}', '#{params[:record_specs]}', '#{params[:pressing_year]}', '#{params[:image]}')"
  redirect to("/records") #this will be a get request instead of the POST request we are currently in...... we post it then we request a get
end

#show

get '/records/:id' do
  # below line will only return single object cos ids are unique.
  @record = query_db "SELECT * FROM records WHERE id=#{params[:id]}"
  @record = @record.first #strips off outer array
  erb :records_show
end

#Edit

get '/records/:id/edit' do
  @record = query_db "SELECT * FROM records WHERE id=#{params[:id]}"
  @record = @record.first
  erb :records_edit
end

post '/records/:id' do
  query_db "UPDATE records SET artist='#{params[:artist]}', record_name='#{params[:record_name]}',
  record_specs='#{params[:record_specs]}',
  pressing_year='#{params[:pressing_year]}',
  image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to("/records/#{params[:id]}")
end

#DELETE
get '/records/:id/delete' do
  query_db "DELETE FROM records WHERE id=#{params[:id]}"
  redirect to('/records') #another get request
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  puts sql_statement # Optional bonus feature for debugging
  results = db.execute sql_statement

  db.close # Prevent leaving too many connections open
  results # Implicitly returned
end
