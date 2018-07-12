require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


require 'pry'

get '/' do
  erb :home
end

#index

get'/dog_shelter' do

  @dog_shelter = query_db 'SELECT * FROM dog_shelter'
  erb :dog_shelter_index
#erb :butterflies_index
#@butterflies.inspect #turns something into a string.

end
# new action and it needs to come before butterflies/id. it firgures it out before below
get '/dog_shelter/new' do
erb :dog_shelter_new
end

#create
post '/dog_shelter' do

  query_db "INSERT INTO dog_shelter (breed, name, location, image) VALUES ('#{ params[:breed] }', '#{ params[:name] }', '#{ params[:location] }', '#{ params[:image] }')"
  redirect to ('/dog_shelter') # this willl be a get request
end

#show
get '/dog_shelter/:id' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  @dog = query_db "SELECT * FROM dog_shelter WHERE id=#{ params[:id] }"
  @dog = @dog.first #strip off the outter array
  @dog.inspect

  erb :dog_shelter_show


end

get '/dog_shelter/:id/edit' do
  @dog = query_db "SELECT * FROM dog_shelter WHERE id=#{ params[:id] }"
  @dog = @dog.first
  erb :dog_shelter_edit

end

post '/dog_shelter/:id' do
  query_db "UPDATE dog_shelter SET breed='#{ params[:breed] }', name='#{ params[:name] }', location='#{ params[:location] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
redirect to ("dog_shelter/#{ params[:id] }")
end

get '/dog_shelter/:id/delete' do
  query_db"DELETE FROM dog_shelter WHERE id=#{ params[:id] }"
  redirect to ('/dog_shelter') #another get request
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement

  puts sql_statement  #optional bonus feature for debugging

  db.close #once we have something frmo the database then we need to close otherwise eventually it opens too many connections.
  results #implicitiy returned

end
