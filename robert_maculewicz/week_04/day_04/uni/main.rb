require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

require 'pry'

get '/' do
  erb :home
end

# Index
get '/students' do
  @students = query_db 'SELECT * FROM students'
  erb :students_index
end

# New (needs to come before /butterflies/:id)
get '/students/new' do
  erb :students_new
end


# Show
get '/students/:id' do
  @students = query_db "SELECT * FROM students WHERE id=#{ params[:id] }"
  @students = @students.first # Strip off the outer array
  erb :students_show
end


# Create
post '/students' do
  query_db "INSERT INTO students (name, familyName, image) VALUES ('#{ params[:name] }', '#{ params[:familyName] }', '#{ params[:image] }')"
  redirect to('/students') # This will be a GET request
end

get '/students/:id/edit' do
  @students = query_db "SELECT * FROM students WHERE id=#{ params[:id] }"
  @students = @students.first
  erb :students_edit
end

# Update
post '/students/:id' do
  query_db "UPDATE students SET name='#{ params[:name] }', familyName='#{ params[:family] }', image='#{ params[:image] }' WHERE id=#{params[:id]}"
  redirect to("/students/#{ params[:id] }")
end

# Delete function
get '/students/:id/delete' do
  query_db "DELETE FROM students WHERE id=#{ params[:id] }"
  redirect to('/students') # Another GET request
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement

  puts sql_statement # Optional bonus feature for debugging

  db.close # Prevent leaving too many connections open
  results # Implicitly returned
end
