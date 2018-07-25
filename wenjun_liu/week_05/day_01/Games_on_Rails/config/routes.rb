Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#homepage'

  get '/magic_eight_ball' => 'magic_eight_ball#homepage'
  get '/magic_eight_ball/result' => 'magic_eight_ball#result'

  get '/secret_number' => 'secret_number#homepage'
  get '/secret_number/result' => 'secret_number#result'

  get '/rock_paper_scissors' => 'rock_paper_scissors#homepage'
  get '/rock_paper_scissors/:play' => 'rock_paper_scissors#result'
end
