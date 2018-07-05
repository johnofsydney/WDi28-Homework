require 'pry'
@line_N = ['Time Squere','34th','28th','23rd','Union Square','8th']
@line_L = ['8th','6th','Union Square','3rd','1st']
@line_6 = ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
def single_trip line,start_station,finish_station
    if line == "N"
      line_array = @line_N
    elsif line == "L"
      line_array =  @line_L
    else line == "6"
      line_array = @line_6
    end

    start_index = line_array.index start_station

    finish_index = line_array.index finish_station

    line_array[ start_index..finish_index ]

      if
      line_array[ start_index..finish_index ].select{|a| a.include? 'Union Square'}
      puts " You must travel line #{line} through the following stop: #{line_array[ start_index..finish_index].join ', '}"
      puts 'Change at Union Square'

      elsif

      puts " You must travel line #{line} through the following stop: #{line_array[ start_index..finish_index].join ', '}"
      end
end

single_trip "L", "8th", "1st"
#binding.pry
