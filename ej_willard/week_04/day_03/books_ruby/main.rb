require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/books' do
  #taking what user input
@title = (params[:title]).split.map(&:capitalize).join(' ')

book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"

@book_img = HTTParty.get book_url
@book_auth = HTTParty.get book_url

#getting thumnail
@thumbnail = @book_img['items'].first['volumeInfo']['imageLinks']['thumbnail']

#getting author
@author = (@book_auth['items'].first['volumeInfo']['authors']).join() #.join here takes his name out of the array it is in
  erb :books
end
