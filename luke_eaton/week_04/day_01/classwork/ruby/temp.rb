i = 0
while i < 5
    puts "i: #{ i }"
    i += 1
end

i = 0
until i == 5
    puts "i: #{ i }"
    i += 1
end

# ITERATORS
5.times do
    puts "OMG"
end

# one line block
5.times { puts "ZOMG" }


5.times do |i|
    puts "i: #{ i }"


Random.rand(5..10)
end
