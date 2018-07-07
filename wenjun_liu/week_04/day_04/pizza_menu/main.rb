require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# home
get '/' do
  @pizzas = query_db 'SELECT * FROM pizzas'
  erb :home
end

# new button
get '/pizzas/new' do
  erb :pizzas_new
end

# create button
post '/pizzas' do
  query_db  "INSERT INTO pizzas (name, vegetarian, price) VALUES ('#{ params[:name] }', #{ params[:vegetarian]=='on'? 1:0 }, #{ params[:price] })"
  redirect to('/')
end

# Delete
get '/pizzas/:id/delete' do
  query_db "DELETE FROM pizzas WHERE id=#{ params[:id] }"
  redirect to('/')
end

# Edit button
get '/pizzas/:id/edit' do
  @pizza = query_db "SELECT * FROM pizzas WHERE id=#{ params[:id] }"
  @pizza = @pizza.first
  erb :pizza_edit
end

# update
post '/pizzas/:id/edit' do
  query_db "UPDATE pizzas SET name='#{ params[:name] }', vegetarian=#{ params[:vegetarian]=='on'? 1:0 }, price=#{ params[:price] } WHERE id=#{params[:id]}"
  redirect to("/")
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  results = db.execute sql_statement

  puts sql_statement

  db.close
  results
end
