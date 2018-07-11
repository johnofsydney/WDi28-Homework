Rails.application.routes.draw do

  root :to  => 'mountains#home'
  get '/mountains/new' => 'mountains#new'
  get '/mountains/:id' => 'mountains#details'

  post '/mountains/create' => 'mountains#create'
  delete '/mountains/:id' => 'mountains#destroy'

  post '/mountains/:id' => 'mountains#edit'
  post '/mountains/update/:id' => 'mountains#update'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
