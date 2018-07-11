Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/balls' => 'balls#form'
  get '/balls/info' => 'balls#info'

  get '/numbers' => 'numbers#form'
  get '/numbers/info' => 'numbers#info'

  get '/rocks' => 'rocks#form'
  get '/rocks/info' => 'rocks#info'


  end
