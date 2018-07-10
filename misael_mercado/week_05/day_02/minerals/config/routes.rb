Rails.application.routes.draw do
 root :to => 'rocks#home'
 get '/rocks' => 'rocks#index'
 get '/rocks/new' => 'rocks#new'
 post '/rocks' => 'rocks#create'
 get '/rocks/:id' => 'rocks#show', :as => :rock
 get '/rocks/:id/edit' => 'rocks#edit', :as => :rock_edit
 post '/rocks/:id' => 'rocks#update'
 delete '/rocks/:id' => 'rocks#destroy'
end
