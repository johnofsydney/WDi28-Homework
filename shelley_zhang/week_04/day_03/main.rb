
# Build a search form that lets the user enter a book title. The Sinatra app will use HTTParty to fetch the data for the chosen book from Google Books and display it on the page. Display the cover, as a bare minimum.

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/cover' do
  @title = params[:BookTitle]
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
  @book_info = HTTParty.get book_url; #fetching book info from url
  @book_title = @book_info['items'].first['volumeInfo']['title']
  @cover = @book_info['items'].first['volumeInfo']['imageLinks']['thumbnail']
  @book_desc = @book_info['items'].first['volumeInfo']['description']
  @author = @book_info['items'].first['volumeInfo']['authors']
  erb :cover

end
