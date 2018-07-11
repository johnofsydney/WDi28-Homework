require 'sinatra'
require 'sinatra/reloader'
require 'image_book'

get '/' do
  erb :home
end

get '/price' do


  erb :price
end
