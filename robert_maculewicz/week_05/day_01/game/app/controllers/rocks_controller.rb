class RocksController < ApplicationController
  def form
    render :form
  end

  def info

    random_number = (1..10).to_a.sample(1).first

    guessed_number = params["number"].to_i
     if random_number == guessed_number
       @answer = " YOU WIN"
      else
       @answer = "YOU LOSE"

      end

    render :info
  end
end
