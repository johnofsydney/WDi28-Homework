class RpsController < ApplicationController
def player1
  render :player1
end


def played
  index = Random.rand(0..2)
  options = ["Rock", "Paper","Scissors"]
  @throw = params[:roll]
  @computer_move = options[index]
  render :played
end

end
