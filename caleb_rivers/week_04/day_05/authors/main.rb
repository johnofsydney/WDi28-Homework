require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

require 'pry'

# Rails will do this for you, but meanwhile in Sinatra
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Book < ActiveRecord::Base
end

class Author < ActiveRecord::Base
end

get "/" do
  erb :home
end

get "/books" do
  @books = Book.all
  erb :books_index
end

get '/books/new' do
  erb :books_new
end

# Create
post '/books' do
  book = Book.new
  book.name = params[:name]
  book.cover = params[:cover]
  book.save # An ID will be added to our object
  redirect to("/books/#{ book.id }") # This will be a GET request
end

get '/books/:id' do
  @book = Book.find params[:id]
  erb :books_show
end

get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end

# Update
post '/books/:id' do
  book = Book.find params[:id]
  book.name = params[:name]
  book.cover = params[:cover]
  book.save
  redirect to("/books/#{ book.id }")
end

# Delete
get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy
  redirect to('/books') # Another GET request
end

#Author Index
get '/authors' do
  @authors = Author.all
  erb :authors_index
end

get '/authors/new' do
  erb :authors_new
end

# Create
post '/authors' do
  author = Author.new
  author.name = params[:name]
  author.save
  redirect to("/authors/#{ author.id }")
end

# Show
get '/authors/:id' do
  @author = Author.find params[:id]
  erb :authors_show
end

# Edit
get '/authors/:id/edit' do
  @author= Author.find params[:id]
  erb :authors_edit
end

# Update
post '/authors/:id' do
  author = Author.find params[:id]
  author.name = params[:name]
  author.save
  redirect to("/authors/#{ author.id }")
end

# Delete
get '/authors/:id/delete' do
  author = Author.find params[:id]
  author.destroy
  redirect to('/authors')
end
