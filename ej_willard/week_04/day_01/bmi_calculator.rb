# Calculate the body mass index (BMI) for an individual, given their height and weight

require 'rainbow'

def start_menu
  puts "BMI Calculator"
  puts "*" * 80
  puts "[g] - Get my BMI!" #AUS
  puts "[l] - Leave BMI Calculator"
  print "Please let us know what you would like to do: "
end

start_menu
user_choice = gets.chomp.downcase

#adding function
def bmi (height, weight)
  ((weight / height) / height)
end

until user_choice == 'l'
  case user_choice

  when "g"
    print Rainbow("Please enter your height in meters: ").aqua
    c = gets.to_f
    print Rainbow("Please enter your weight in kilograms: ").aqua
    k = gets.to_f
    result = bmi(c, k).round(2)
    puts Rainbow("Your BMI is #{result}").yellow
    if result <= 18.5
      puts Rainbow("Your BMI of #{result} puts you in the underweight category.").orange
    elsif result <= 24.9
      puts Rainbow("Your BMI of #{result} puts you in the normal category.").green
    else
      puts Rainbow("Your BMI of #{result} puts you in the overweight category.").red
    end
  end
  start_menu
  user_choice = gets.chomp.downcase
end



puts "Thank you checking your BMI with us"
