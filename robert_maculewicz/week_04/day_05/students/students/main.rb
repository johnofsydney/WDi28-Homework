require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

require 'pry'

# Rails will do this for you, but meanwhile in Sinatra
#setup with database, any sql file must be push to sqlite3
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)                      #not nessesery

class Student < ActiveRecord::Base
  belongs_to :uni, :optional => true       # belongs_to because is one uni but many students

end

class Uni < ActiveRecord::Base
  has_many :students                       #  has_many one uni has many student
end

get '/' do
  erb :home
end

# Index
get '/students' do
  @students = Student.all
  # binding.pry
  erb :students_index
end

                                          # New (needs to come before /student/:id)
get '/students/new' do
  erb :students_new
end

# Create
post '/students' do                            #When you create stunent post mean like input from browsa
  student = Student.new                        #Student.new because new student becomme from browse
  student.name = params[:name]
  student.family = params[:family]
  student.image = params[:image]
  # binding.pry
  student.uni_id = params[:uni_id]        #if we add any exstra content,we have add new line ex.dbo    and push sqlite3
  student.save                             # An ID will be added to our object  #????why edit not have save
  redirect to("/students/#{ student.id }")      # This will be a GET request    #???? why redirect
  # redirect to("/students")      # This will be a GET request    #???? why redirect
end

# Show
get '/students/:id' do                           #??? why Student.find
  @student = Student.find params[:id]            #we use @ becouse use many tims
  erb :students_show
end

# Edit
get '/students/:id/edit' do
  @student = Student.find params[:id]
  erb :students_edit
end

# Update
post '/students/:id' do
  student = Student.find params[:id]
  student.name = params[:name]
  student.family = params[:family]
  student.image = params[:image]
  student.uni_id = params[:uni_id]
  student.save
  redirect to("/students/#{ student.id }")
end

# Delete
get '/students/:id/delete' do
  student = Student.find params[:id]
  student.destroy
  redirect to('/students') # Another GET request
end

# Index
get '/unis' do
  @unis = Uni.all
  erb :unis_index
end

# New
get '/unis/new' do
  erb :unis_new
end

# Create
post '/unis' do
  uni = Uni.new
  uni.name = params[:name]
  uni.image = params[:image]
  uni.save
  redirect to("/unis/#{ uni.id }")
end

# Show
get '/unis/:id' do
  @uni = Uni.find params[:id]
  erb :unis_show
end

# Edit
get '/unis/:id/edit' do
  @uni = Uni.find params[:id]
  erb :unis_edit
end

# Update
post '/unis/:id' do
  uni = Uni.find params[:id]
  uni.name = params[:name]
  uni.image = params[:image]
  uni.save
  redirect to("/unis/#{ uni.id }")
end

# Delete
get '/unis/:id/delete' do
  uni = Uni.find params[:id]
  uni.destroy
  redirect to('/unis')
end

get '/pry' do
  binding.pry # This is a bit naughty
end
