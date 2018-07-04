require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'HTTParty'

get '/' do
  erb :home
end

#get '/book' do

#erb :home
#end

get '/book' do

  @book_info = params[:book_title]

  @items = @book_info['items'].first['volumeInfo']['imageLinks']['thumbnail']
  result = HTTParty.get "https://www.googleapis.com/books/v1/volumes/pyfvAgAAQBAJ#{@items}"

  @volumeInfo = @book_info['items'].first['volumeInfo']['imageLinks']['thumbnail']
  result = HTTParty.get "https://www.googleapis.com/books/v1/volumes/pyfvAgAAQBAJ#{@volumeInfo}"

  @imageLinks = @book_info['items'].first['volumeInfo']['imageLinks']['thumbnail']
  HTTParty.get "https://www.googleapis.com/books/v1/volumes/pyfvAgAAQBAJ#{@imageLinks}"

  @thumbnail = @book_info['items'].first['volumeInfo']['imageLinks']['thumbnail']
  result = HTTParty.get "http://books.google.com/books/content?id=pyfvAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api#{@thumbnail}""

  redirect to('/') if @title.nil?

  erb :book

end
