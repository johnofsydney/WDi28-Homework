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

  @book_info = params[:book_info]
  result = HTTParty.get "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_info}" #raw data filtered from api
  @thumbnailURL = result['items'].first['volumeInfo']['imageLinks']['thumbnail']


  #redirect to('/') if @title.nil?

  erb :books # links to books.erb file.

end
