require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
 erb :home
end

get '/book' do
  @title = params[:book]
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"

  @book_info = HTTParty.get book_url;
  @thumbnail = @book_info['items'].first['volumeInfo']['imageLinks']['thumbnail']
  @author = @book_info['items'].first['volumeInfo']['authors'].join()
  @description = @book_info['items'].first['volumeInfo']['description']
  erb :book

end
