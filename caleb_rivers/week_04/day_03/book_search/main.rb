require "sinatra"
require "sinatra/reloader"
require "pry"
require "httparty"

get '/' do
  erb :home
end

get '/result' do
  #getting the string the user passed in
  @book = params[:book]

  #googles api
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book}"

  #using HTTParty to get the info for the book
  @book_info = HTTParty.get book_url

  #redirecting to home if there is no info on the book
  redirect to('/') if @book_info.nil?

  #digging down into the data to get the cover picture.
  @book_img = @book_info['items'].first['volumeInfo']['imageLinks']['thumbnail']
  @description = @book_info['items'].first['volumeInfo']["description"]

  erb :result

end
