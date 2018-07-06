require 'sinatra'
require 'sinatra/reloader'
require 'pry'
get '/' do

erb :home
end


get '/result' do


  erb :result
end
binding.pry
