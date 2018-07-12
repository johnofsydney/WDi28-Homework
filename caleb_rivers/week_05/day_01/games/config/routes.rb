Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => "pages#home"

  get '/magic' => 'pages#magic'
  get '/magic/info' => 'pages#info'

  get '/guess' => 'pages#guess'
  get '/guess/info' => 'pages#guess_info'
end
