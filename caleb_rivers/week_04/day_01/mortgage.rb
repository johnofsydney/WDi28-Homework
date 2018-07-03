require "rainbow"

def mortage
  puts Rainbow( "-------------------------------------").red
  print Rainbow( "| ").red
  print "Welcome to the Mortage Calculator"
  puts Rainbow(" |").red
  puts Rainbow("-------------------------------------").red

  print "Please input your loan term: "
  term = gets.to_i
  print "Please input your interest rate (per annum): "
  interest = gets.to_f
  print "Please input the principal ammount borrowed: "
  borrowed = gets.to_f
  term = term * 12
  interest = interest/12

  monthly = borrowed*(( interest* ( 1+interest ) ** term ) / ( 1 - ( 1 + interest ) ** term ))

  puts "Your monthly repayments are $#{monthly} "

  # M = P [i(1+i)^n/ 1-(1+i)^n]
#   M = Your monthly repayment, the figure you’re trying to solve for.
# P =The principal on the loan, or original amount you borrowed.
# i = Your effective monthly interest rate. Remember, the rate you see advertised by the bank is an annual interest rate, so you’ll need to divide by 12 to get your monthly interest rate.
# n = The total number of repayments on the loan.



end

mortage
