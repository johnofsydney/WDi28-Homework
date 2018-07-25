require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
	erb :search
end

get '/result' do
  @title = params[:title]
  @url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"

  @info = HTTParty.get(@url)
  @title = @info["items"].first["volumeInfo"]["title"]
  @author = @info["items"].first["volumeInfo"]["authors"]
  @cover = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
  @desc = @info["items"].first["volumeInfo"]["description"]

  erb :result
end
