class Station
  def initialize(name, interchanges)
    @name = name
    @interchanges = interchanges
  end

  def name
    @name
  end

  def check_interchangeable(line)
    @interchanges.include?(line)
  end

end
