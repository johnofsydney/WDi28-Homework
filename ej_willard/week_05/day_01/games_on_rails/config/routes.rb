Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  #NOTE HOMEPAGE
  root :to => 'pages#homepage'

  get '/home' => 'pages#homepage'

  #NOTE EIGHTBALL

  get '/eightball' => 'eightball#form'

  get '/eightball/result' => 'eightball#result'

  #NOTE SECRET Number
  get '/secretnumber/result' => 'secretnumber#result'
  get 'secretnumber/:id' => 'secretnumber#result'
  get '/secretnumber' => 'secretnumber#guess'



end
