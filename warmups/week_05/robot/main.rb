require 'pry'

class Robot

  def initialize
    @name = make_name
    @counter = 0
    @boot_time = Time.new
    @creation_time = Time.new
  end

  def make_name
    letters = ("A".."Z").to_a.sample(2).join
    numbers = (0..9).to_a.sample(3).join

    letters + numbers
  end

  def name
    @counter += 1
    @name
  end

  def reset
    @counter += 1
    @name = make_name
    @boot_time = Time.new
  end

  def instruction_count
    @counter += 1
    @counter
  end

  def timers
    @counter += 1
    time_since_creation = Time.now - @creation_time
    time_since_boot = Time.now - @boot_time
    "#{time_since_creation} seconds since creation. #{time_since_boot} seconds since boot"
  end


end


binding.pry
