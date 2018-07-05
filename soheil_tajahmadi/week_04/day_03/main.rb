require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do

  erb :home
end


get '/result' do
  book_name = params[:name]

  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{book_name}"
  book_data = HTTParty.get (book_url)
  @book_author = book_data["items"][0]["volumeInfo"]["authors"][0]
  @thumbnail_url = book_data["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @description = book_data["items"][0]["volumeInfo"]["description"]
  # binding.pry
  erb :details
end
