Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  # route magic8 game Pages
  get '/magic8/answer' => 'magic8#answer'
  get '/magic8' => 'magic8#input'

  #route secret number Game
  get '/secretnumber' => 'secretnumber#game'
  get '/secretnumber/result' => 'secretnumber#result'

  #route Rock Paper Scissors
  get '/rps' => 'rps#player1'
  get '/rps/:throw' => 'rps#played'

end
