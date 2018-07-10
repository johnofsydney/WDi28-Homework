Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/home" => "pages#home"

  get "/eightball" => "eight_ball#form_html"
  get "/eightball/results" => "eight_ball#info_html"

  get "/secretnumber" => "secret_number#guess"
  get "/secretnumber/answer/:num" => "secret_number#answer"

  get "/rockpaperscissors" => "rock_paper_scissors#start"
  get "rockpaperscissors/:throw" => "rock_paper_scissors#display"
end
