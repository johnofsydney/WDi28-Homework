require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/search_result' do
  @fetch_data = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{params[:key_word]}")
  erb :search_result
end
