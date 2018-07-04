grade = 'B'
case grade
when 'A'
    p 'You are killing it'
when 'B'
    p 'You are coasting fine'
when 'C'
    p 'Acceptable'
else
    p 'Please see me after class'
end

case expression_one
when expression_two, expression_three
    statement_one
when expression_four, expression_five
    statement_two
else
    statement_three
end

# Very similar to the switch statement in JavaScript!
