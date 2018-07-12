require "pry"
require "sinatra"
require "sinatra/reloader"
require "httparty"

get '/' do
  erb :home
end

get '/results' do

  @title = params[:title]
  @url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}";
   
  @biglist = HTTParty.get @url

  @book_title = @biglist["items"][0]["volumeInfo"]["title"]
  @author = @biglist["items"][0]["volumeInfo"]["authors"][0]
#  @published_date = @biglist["items"][0]["volumeInfo"]["publishedDate"]
#  @description = @biglist["items"][0]["volumeInfo"]["description"]
#  @rating = @biglist["items"][0]["volumeInfo"]["averageRating"]
  #@biglist["items"][0]["volumeInfo"]["imageLinks"] -- drill down for images.
  @smallThumbnail = @biglist["items"][0]["volumeInfo"]["imageLinks"]["smallThumbnail"]
  @thumbnail = @biglist["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]


  # binding.pry
  erb :result
end
