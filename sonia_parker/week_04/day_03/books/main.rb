require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/books' do
  @book_title = params[:book_title]
  @book_info = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}")

  # p @book_info

@cover = @book_info['items'].first['volumeInfo']['imageLinks']['thumbnail']
@title = @book_info['items'].first['volumeInfo']['title']
@description = @book_info['items'].first['volumeInfo']['description']
  redirect to('/') if @book_info.nil? # Rudimentary error handling


  erb :books
end
