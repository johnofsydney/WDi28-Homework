require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# Rails will do this for you, but meanwhile we have to do this ourselves
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'errors.db'
)

#Optional Bonus
ActiveRecord::Base.logger = Logger.new(STDERR)


# Table Classes
class Error < ActiveRecord::Base
  belongs_to :err_meaning, :optional => true
  # Errors.first.err_meaning
end

class ErrMeaning < ActiveRecord::Base
  has_many :Error
  # ErrMeaning.first.errors

end


get '/' do
  erb :home
end

# Show All Errors
get '/errors' do
  @errors = Error.all
  erb :errors
end

post '/errors/new' do
  e = Error.new
  e.name = params[:name]
  e.error_msg = params[:error_msg]
  e.err_meaning_id = params[:err_meaning_id]
  e.save

  redirect to "/errors/#{e.id}"
end

get '/errors/new' do
  erb :errors_new
end

post '/errors/:id' do
  e = Error.find(params[:id])
  e.name = params[:name]
  e.error_msg = params[:error_msg]
  e.err_meaning_id = params[:err_meaning_id]
  e.save

  redirect to "/errors/#{e.id}"
end

get '/errors/:id' do
  @error = Error.find(params[:id])

  erb :errors_show
end

get '/errors/:id/delete' do
  Error.find(params[:id]).destroy

  redirect to '/errors'
end

get '/errors/:id/edit' do
  @error = Error.find(params[:id])

  erb :errors_update
end


# Show All Error Meanings
get '/err_meaning' do
  @err_meaning = ErrMeaning.all
  erb :err_meaning
end

post '/err_meaning/new' do
  e = ErrMeaning.new
  e.meaning = params[:meaning]
  e.example = params[:example]
  e.save

  redirect to "/err_meaning/#{e.id}"
end

get '/err_meaning/new' do
  erb :err_meaning_new
end

post '/err_meaning/:id' do
  e = ErrMeaning.find(params[:id])
  e.meaning = params[:meaning]
  e.example = params[:example]
  e.save

  redirect to "/err_meaning/#{e.id}"
end

get '/err_meaning/:id' do
  @err_meaning = ErrMeaning.find(params[:id])

  erb :err_meaning_show
end

get '/err_meaning/:id/delete' do
  ErrMeaning.find(params[:id]).destroy

  redirect to '/err_meaning'
end

get '/err_meaning/:id/edit' do
  @err_meaning = ErrMeaning.find(params[:id])

  erb :err_meaning_update
end