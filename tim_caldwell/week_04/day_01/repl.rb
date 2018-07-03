require "readline"
require "coderay" #this is a syntax highlighting gem

puts "Welcome to Tims Ruby REPL"
bnd = binding   # get a new binding -- allows us to keep the same execution space across multiple lines

while input = Readline.readline("> ", true) #readline enables navigation and more https://ruby-doc.org/stdlib-2.3.3/libdoc/readline/rdoc/Readline.html
  begin # begin to capture errors
    result = bnd.eval input # evaluate the input and store result. Use binding to keep execution space
  rescue StandardError => e # capture and handle errors
    puts "Error: #{e.class} - #{e.message}"
  else
    puts CodeRay.encode( result.inspect, :ruby, :terminal )
  end
end
