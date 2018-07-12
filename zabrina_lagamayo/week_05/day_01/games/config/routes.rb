Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/home' => 'pages#home'
  get '/ball' => 'ball#index'
  get '/ball/result' => 'ball#result'

  get '/number' => 'number#index'
  get '/number/result' => 'number#result'

  get '/rock_paper_scissors' => 'rock_paper_scissors#index'
  get '/rock_paper_scissors/result' => 'rock_paper_scissors#result'
end
