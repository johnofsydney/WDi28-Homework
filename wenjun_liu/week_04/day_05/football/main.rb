require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Player < ActiveRecord::Base
  belongs_to :club, :optional => true
end

class Club < ActiveRecord::Base
  has_many :players
end

# Home also list of players
get '/' do
  @players = Player.all
  erb :home
end

# show player with id
get '/players/:id' do
  @player = Player.find params[:id]
  erb :player_info
end

# create player page
get '/player/new' do
  erb :player_new
end

# Create player
post '/players' do
  player = Player.new
  player.name = params[:name]
  player.country = params[:country]
  player.position = params[:position]
  player.age = params[:age]
  player.club_id = params[:club_id]
  player.save
  redirect to("/players/#{ player.id }")
end

# edit player page
get '/players/:id/edit' do
  @player = Player.find params[:id]
    p @player.id
  erb :player_edit
end

#update player
post '/players/:id' do
  player = Player.find params[:id]
  player.name = params[:name]
  player.country = params[:country]
  player.position = params[:position]
  player.age = params[:age]
  player.club_id = params[:club_id]
  player.save
  redirect to("/players/#{ player.id }")
end

# Delete player
get '/players/:id/delete' do
  player = Player.find params[:id]
  player.destroy
  redirect to('/')
end

# -----------------------club part

# list of Clubs
get '/clubs' do
  @clubs = Club.all
  erb :clubs_index
end

# create a club page
get '/club/new' do
  erb :clubs_new
end

# Create button
post '/clubs' do
  club = Club.new
  club.name = params[:name]
  club.country = params[:country]
  club.img = params[:img]
  club.save
  redirect to("/clubs/#{ club.id }")
end

# Show club info
get '/clubs/:id' do
  @club = Club.find params[:id]
  erb :club_info
end

# Edit button
get '/clubs/:id/edit' do
  @club = Club.find params[:id]
  erb :club_edit
end

# Update button
post '/clubs/:id' do
  club = Club.find params[:id]
  club.name = params[:name]
  club.country = params[:country]
  club.img= params[:img]
  club.save
  redirect to("/clubs/#{ club.id }")
end

# Delete
get '/clubs/:id/delete' do
  club = Club.find params[:id]
  club.destroy
  redirect to('/clubs')
end
