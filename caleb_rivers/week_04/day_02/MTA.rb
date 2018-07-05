require 'pry'

puts "Welcome to MTA"

NLINE = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
LLINE = ["8th", "6th", "Union Square", "3rd", "1st"]
SIXLINE = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

def mta (start_line, start_stop, end_line, end_stop)
  index_start = start_line.index(start_stop)
  index_stop = end_line.index(end_stop)
  firstline =[]

  if index_start < index_stop
    firstline << start_line[index_start..index_stop]

    if firstline.select {|a| a.include? "Union Square"}
      # index_stop = end_line.index("Union Square")
      var = firstline[0].index("Union Square")
      var += 1
      var2 = firstline[0].length
      var2 -=1

      firstline[0].delete_at(var)
    end
  end


  if index_start > index_stop
    firstline << start_line[index_stop..index_start].reverse
  end
  p firstline
end

mta NLINE, "34th", NLINE, "8th"

#
# print "Whats your Starting Line? : "
# start_line = gets.chomp
# print "Whats your Starting Stop: "
# start_stop = gets.chomp
# print "Whats your Ending Line? :"
# end_line = gets.chomp
# print "Whats your endings Stop? : "
# end_stop = gets.chomp
#
# mta start_line, start_stop, end_line, end_stop
# binding.pry
