input_string = ""
while input_string != "quit"
  print "REPL prompt:-- } "
  input_string = gets.chomp
  if input_string !="quit"
    result = eval(input_string)
    puts ">> #{result}"

  end
end

puts "Thanks for using our REPL!"
