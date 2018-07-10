Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic' => 'magic#form'
  get '/magic/answer' => 'magic#game'

  get '/secret' => 'secret#form'
  get '/secret/answer' => 'secret#game'

  get '/rock' => 'rock#form'
  get '/rock/answer' => 'rock#game'
end
