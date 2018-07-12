class PagesController < ApplicationController
  def home
    render :home
  end

  def magic
    render :magic
  end

  def info
    @answers = ["Yes you are", "No your not", "I see that happening", "definately stray away"]
    @answer = @answers[rand(4)]

    render :magic_info
  end

  def guess
    render :guess
  end

  def guess_info
    guessed = params[:number]
    guessed = guessed.to_i
    actual = rand(10)
    @answer = false
    if guessed == actual
      @answer = true
    end
    # raise 'hell'
    render :guess_info
  end
end
