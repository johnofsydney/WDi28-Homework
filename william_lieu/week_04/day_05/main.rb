require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'


require 'pry'


ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Book < ActiveRecord::Base
  belongs_to :author, :optional => true # required since Rails 5
end

class Author < ActiveRecord::Base
  has_many :books
end



get '/' do
  erb :home
end


get '/books' do
  @books = Book.all
  erb :books_index
end

get '/books/new' do
  @books = Book.all
  erb :books_new
end

post '/books' do
  book = Book.new
  book.title = params[:title]
  book.image = params[:image]
  book.author_id = params[:author_id]
  book.save # An ID will be added to our object
  redirect to("/books/#{ book.id }") # This will be a GET request
end


get '/books/:id' do
  @book = Book.find params[:id]
  erb :books_show
end
get '/butterflies/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end


post '/books/:id' do
  book = B.find params[:id]
  book.title = params[:title]
  book.image = params[:image]
  book.author_id = params[:author_id]
  book.save
  redirect to("/books/#{ book.id }")
end

get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy
  redirect to('/books') # Another GET request
end

get '/authors' do
  @authors = Author.all
  erb :authors_index
end


get '/authors/new' do
  erb :authors_new
end

post '/authors' do
  author = author.new
  author.name = params[:name]
  author.image = params[:image]
  author.save
  redirect to("/authors/#{ author.id }")
end


get '/authors/:id' do
  @author = author.find params[:id]
  erb :authors_show
end

get '/authors/:id/edit' do
    @author = author.find params[:id]
    erb :authors_edit
end


post '/authors/:id' do
    author = author.find params[:id]
    author.name = params[:name]
    author.image = params[:image]
    author.save
    redirect to("/authors/#{ author.id }")
end


get '/authors/:id/delete' do
  author = author.find params[:id]
  author.destroy
  redirect to('/authors')
end
