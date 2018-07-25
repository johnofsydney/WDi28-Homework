require 'pry'


n = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
l = ['8th', '6th', 'Union Square', '3rd', '1st']
six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']

ny_metro = {}
ny_metro[:n] = n
ny_metro[:l] = l
ny_metro[:six] = six

puts "Welcome to the NY Metro!"
puts "Which line would you like to get on? (N, L, or Six)"
line = gets.chomp.downcase

if ny_metro.has_key?(line.to_sym)
  puts "All stops on line #{line} are: " + ny_metro[line.to_sym].join(', ')
else
  puts "Sorry, not a valid line."
end

puts "What stop are you getting on?"
start = gets.chomp.downcase
