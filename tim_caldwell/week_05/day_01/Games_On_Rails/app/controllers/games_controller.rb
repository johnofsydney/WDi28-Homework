class GamesController < ApplicationController

  def magic8
    unless params[:q].nil?
      @magic8_list = 'It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes - definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
        'Signs point to yes.',
        'Reply hazy, try again',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        'Don\'t count on it.',
        'My reply is no.',
        'My sources say no',
        'Outlook not so good.',
        'Very doubtful.'
      @answer = @magic8_list.sample
    end

    render :magic8
  end

  def secret
    # raise params.inspect
    if params[:n].nil? || params[:n].empty?
      @num = (1..10).to_a.sample
    else
      @num = params[:n]
    end

    if !params[:g].nil?
      @win = @num == params[:g]
      @num = "" if @win == true
    else
      @win = nil
    end
    # raise params.inspect
    render :secret
  end

  def rps
    render :rps
  end

  def rps_play
    @ruby_throw = ['rock','paper','scissors'].sample
    @player_throw = params[:throw]

    if @player_throw == @ruby_throw 
      @win = 'It\'s a Draw'
    elsif @player_throw == 'rock' && @ruby_throw == 'scissors'
      @win = 'You win!'
      @text = "Rock smashes Scissors!"
    elsif @player_throw == 'paper' && @ruby_throw == 'rock'
      @win = 'You win!'
      @text = "Paper covers Rock!"
    elsif @player_throw == 'scissors' && @ruby_throw == 'paper'
      @text = "Scissors cuts Paper!"
      @win = 'You win!'
    else
      @win = 'You Lose!'
      @text = case @ruby_throw
      when 'rock' then "Rock smashes Scissors!"
      when 'paper' then "Paper covers Rock!"
      when 'scissors' then "Scissors cuts Paper!"
      end
    end

    render :rps_play
  end
end