require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  #Embedded Ruby
  erb :home
end

get '/price' do
  #Tidy up the user inputs
