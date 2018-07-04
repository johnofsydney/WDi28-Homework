# M is your monthly payment.
# P is your principal.
# r is your monthly interest rate, calculated by dividing your annual interest rate by 12.
# n is your number of payments (the number of months you will be paying the loan)[6]

# M = P * ( (r*(1+r)^n ) / ((1 + r)^n - 1))

puts "Welcome ot the mortgage repayment calculator"

print "What's your loan principal? : "
pr = gets.to_i

print "What's the interest rate per annum? : "
r = gets.to_f / 12 / 100

print "How many years will you have the loan? : "
n = gets.to_i * 12

M = pr *( (r*(1+r) ** n ) / ((1 + r) ** n - 1))

puts "Your monthly repayment would be #{ M }."
