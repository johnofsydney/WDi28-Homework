Rails.application.routes.draw do
  root :to => 'pages#home' #this is the homepage
  get '/home' => 'pages#home' #get request for home
  get '/magicball' => 'magicball#form'
  get '/magicball/info' => 'magicball#info'
  get '/secretnumber' => 'secretnumber#form'
  get '/secretnumber/info' => 'secretnumber#info'
  get '/rockpaperscissors' => 'rockpaperscissors#form'
  get '/rockpaperscissors/throw' => 'rockpaperscissors#info'
end
