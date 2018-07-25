class MagicballController < ApplicationController

  def form
    render :form
  end

  def answers
    @answer = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ]
end

def random_answer
  answers[Random.rand(answers.size)]
end

  def info
    @question = "#{params[:question]}"
    @answer = random_answer
    render :info
  end
end
