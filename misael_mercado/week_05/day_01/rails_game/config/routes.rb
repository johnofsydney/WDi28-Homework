Rails.application.routes.draw do
  root :to => 'pages#home'

   get '/magic_ball' => 'magic_ball#ask'
   get '/magic_ball/answers' => 'magic_ball#answers'

   get '/secret_number' => 'secret_number#guess'
  # get '/secret_number/info' => 'secret_number#answers'
  #
   get '/rock_paper_scissors' => 'rock_paper_scissors#game'
  # get '/Rock_Paper_Scissors/info' => 'rock_paper_scissors#result'
end
