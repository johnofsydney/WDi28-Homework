Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic' => 'magic#game'
  get '/magic/answer' => 'magic#magicanswer'

  get '/secretn' => 'secretn#game'
  get '/secretn/answer' => 'secretn#secretnanswer'
end
