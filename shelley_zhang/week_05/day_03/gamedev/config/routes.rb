Rails.application.routes.draw do
  root :to => 'developers#index'
  resources :developers
  resources :games
end
