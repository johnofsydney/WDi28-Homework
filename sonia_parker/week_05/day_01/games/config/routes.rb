Rails.application.routes.draw do
  get 'magic8_ball/:question', to: 'magic8_ball#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
get "secret_number/:number", to: "secret_number#index"

get "rock_paper_scissors/:throw", to: "rock_paper_scissors#index"
end



# /magic8ball/is-rowie-cute         yes or no
# /magic8ball/are-dogs-frens

# rails generate Controller Magic8Ball index

# /secretNumber/form   <-- shows numbers 1 to 10 as buttons
# /secretNumber/result  <-- shows whether they guessed correct number
#
# rails generate controller SecretNumber index
#
#

# /rock_paper_scissors/rock
# /rock_paper_scissors/paper
# /rock_paper_scissors/scissors

# rails generate controller RockPaperScissors index
