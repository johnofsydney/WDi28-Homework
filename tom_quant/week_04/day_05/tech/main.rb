require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

class Earphone < ActiveRecord::Base
  belongs_to :brands, :optional => true
end

class Brands < ActiveRecord::Base
  has_many :earphones
end




#home
get '/' do
  @earphone = Earphone.all
  @brands = Brands.all
  erb :home
end

#index
get '/earphones' do
  @earphone = Earphone.all
  erb :earphones_index
end

#new
get '/earphones/new' do
  erb :earphones_new
end

#show
get '/earphones/:id' do
  @earphones = Earphone.find params[:id]
  erb :earphones_show
end

#edit
get '/earphones/:id/edit' do
  @earphones = Earphone.find params[:id]
  erb :earphones_edit
end

#edit
get '/earphones/:id/delete' do
  earphones = Earphone.find params[:id]
  earphones.destroy
  redirect to('/earphones') # Another GET request
end

#edit post
post '/earphones/:id' do
  earphones = Earphone.find params[:id]
  earphones.name = params[:name]
  earphones.image = params[:image]
  earphones.price = params[:price]
  earphones.noise_cancelling = params[:noise_cancelling]
  earphones.notes = params[:notes]
  earphones.brands_id = params[:brands_id]
  earphones.save
  redirect to("/earphones/#{ earphones.id }")
end

#new post
post '/earphones' do
  earphones = Earphone.new
  earphones.name = params[:name]
  earphones.image = params[:image]
  earphones.price = params[:price]
  earphones.noise_cancelling = params[:noise_cancelling]
  earphones.notes = params[:notes]
  earphones.brands_id = params[:brands_id]
  earphones.save
  redirect to("/earphones")
end


#index
get '/brands' do
  @brands = Brands.all
  erb :brands_index
end

#new
get '/brands/new' do
  erb :brands_new
end

#show
get '/brands/:id' do
  @brands = Brands.find params[:id]

  erb :brands_show
end

#edit
get '/brands/:id/edit' do
  @brands = Brands.find params[:id]
  erb :brands_edit
end

#edit
get '/brands/:id/delete' do
  brands = Brands.find params[:id]
  brands.destroy
  redirect to('/brands') # Another GET request
end

#edit post
post '/brands/:id' do
  brands = Brands.find params[:id]
  brands.name = params[:name]
  brands.logo = params[:logo]
  brands.notes = params[:notes]
  brands.save
  redirect to("/brands/#{ brands.id }")
end

#new post
post '/brands' do
  brands = Brands.new
  brands.name = params[:name]
  brands.logo = params[:logo]
  brands.notes = params[:notes]
  brands.save
  redirect to("/brands")
end


get '/pry' do
  binding.pry # This is a bit naughty
end
