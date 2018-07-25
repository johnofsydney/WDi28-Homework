class GamesController < ApplicationController
  def index
    @games = Game.all
  end

  def show
    @game = Game.find params[:id]
  end

  def new
    @game = Game.new
  end

  def create
    game = Game.create game_params
    redirect_to game # GET show page
  end

  def edit
    @game = Game.find params[:id]
  end

  def update
    game = Game.find params[:id]
    game.update game_params
    redirect_to game
  end

  def destroy
    game = Game.find params[:id]
    game.destroy
    redirect_to games_path
  end

  private
  def game_params
    # Whitelist of permitted params
    params.require(:game).permit(:name, :genre, :image, :developer_id)
  end
end
