require 'sinatra'
require 'sinatra/reloader'

require 'httparty'


get '/' do
  
  if !params[:title].nil? && !params[:title].empty?
    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{params[:title]}"

    book_info = HTTParty.get book_url
    @total_items = book_info['totalItems']

    if @total_items > 0
      first_match = book_info['items'].first['volumeInfo']
      @thumbnail_url = first_match['imageLinks']['thumbnail']
      @title = first_match['title']
      @author = first_match['authors'].join ', '
      @description = first_match['description']
    end
  end

  erb :home
  
end
