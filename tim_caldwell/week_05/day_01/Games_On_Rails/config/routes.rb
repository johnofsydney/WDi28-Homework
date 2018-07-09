Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
  get '/home' => 'pages#home'

  get '/magic8' => 'games#magic8'
  get '/secret_n' => 'games#secret'
  get '/rps' => 'games#rps'

  get '/rps/:throw' => 'games#rps_play'
end
