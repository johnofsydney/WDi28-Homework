Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

    root :to => 'pages#home'
     get '/home' => 'pages#home'
     get '/magic_ball' => 'magic_ball#ask'
     get '/magic_ball/answers' => 'magic_ball#answers'
     get '/secret_number/' => 'secret_number#form'
     get '/secret_number/info' => 'secret_number#info'

  end
