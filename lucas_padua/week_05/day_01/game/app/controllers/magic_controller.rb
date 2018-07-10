class MagicController < ApplicationController

  def game
    render :game
  end


  def magicanswer

    @answers =
    ["It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Very doubtful"
    ].sample

    render :result
  end



end
