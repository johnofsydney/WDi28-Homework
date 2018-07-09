class EightBallController < ApplicationController

  def form_html

  end

  def info_html
    @answers = [
      'Of course! you are beautiful',
      'Yeah! you are absolutly right!',
      'Better not tell you know',
      'As i see it ! Yes',
      'Ask me again',
      'Most likely',
    ]

    @randomAnswer = @answers.sample()
  end

end
