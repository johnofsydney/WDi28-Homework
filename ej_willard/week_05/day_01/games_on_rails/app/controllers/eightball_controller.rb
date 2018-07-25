class EightballController < ApplicationController

  def form #cos going to make a form for user to ask question
    render :form
  end

  def result
    answers = ["It is certain.", "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no", "Very doubtful."]

    @ballsays = answers.sample
    render :result
  end



end #end of class
