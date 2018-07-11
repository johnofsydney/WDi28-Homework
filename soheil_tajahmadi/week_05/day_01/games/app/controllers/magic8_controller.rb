class Magic8Controller < ApplicationController
  def input
    render :input
  end



  def answer
    @magic8replies = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
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
    # raise 'Error'
    @random_answer = @magic8replies[Random.rand(20)]
    @question = params[:question]

    # raise 'test'
    render :answer
  end
end
