require "sinatra"
require "sinatra/reloader"
require "httparty"


get '/' do
  erb :home
end

get '/cover' do
  @title = params[:title]

  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@title}"

  @book_info = HTTParty.get book_url;

  @cover = @book_info['items'].first['volumeInfo']['imageLinks']['thumbnail']
    erb :cover

end
