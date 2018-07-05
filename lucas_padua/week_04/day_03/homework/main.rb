require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :home
end

get '/book' do
  @title = params[:title]
  @url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title
  @info = HTTParty.get(@url)
  @title = @info["items"].first["volumeInfo"]["title"]
  @author = @info["items"].first["volumeInfo"]["authors"]
  @cover = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
  @desc = @info["items"].first["volumeInfo"]["description"]
  
end
