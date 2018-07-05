require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'HTTParty'


get '/' do
  erb :home
end

get '/books' do
 @title = params[:book].capitalize
 @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"

 @book_info = HTTParty.get @book_url
 redirect to ('/') if @book_info.nil?
 @link = @book_info['items'].first['volumeInfo']['imageLinks']['thumbnail']
 @author = @book_info['items'].first['volumeInfo']['authors'][0]
 @description = @book_info['items'].first['volumeInfo']['description']
 @date = @book_info['items'].first['volumeInfo']['publishedDate']
 @page_count = @book_info['items'].first['volumeInfo']['pageCount']
 @rating = @book_info['items'].first['volumeInfo']['averageRating']
 @maturity = @book_info['items'].first['volumeInfo']['maturityRating']
 @category = @book_info['items'].first['volumeInfo']['categories'][0]
 @buy = @book_info['items'].first['saleInfo']['buyLink']
 @price = @book_info['items'].first['saleInfo']['listPrice']['amount']
  erb :books
end

#
# @cover = @book_info['items'].first['volumeInfo']['imageLinks']['thumbnail']
#
# require 'httparty'
# @title = params[:title]
#
# book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"
# book_info = HTTParty.get book_url
#
# book_info['items'].first['volumeInfo']['imageLinks']
