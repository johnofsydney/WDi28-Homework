list = ["Be True To Your School", "Raining Blood", "Little Deuce Coupe", "Angel of Death", "South of Heaven", "California Girls", "Dead Skin Mask", "Good Vibrations", "Surfin USA", "Hell Awaits"]




def number_of_clicks list, start, stop
  i = list.index start
  j = list.index stop
  n = list.length

  inside = (i - j).abs
  around = n - inside

  p [inside, around].min
end



number_of_clicks list, "Raining Blood", "Little Deuce Coupe"
number_of_clicks list, "Be True To Your School", "Angel of Death" # 3 (3 clicks of the Next button)
number_of_clicks list, "Good Vibrations", "Dead Skin Mask" # 1 (1 ckick of the Previous button)
number_of_clicks list, "Surfin USA", "Raining Blood" # 3 (3 clicks of the Next button)









# def number_of_clicks list, start, stop
#
#   i = list.index start
#   j = list.index stop
#   n = list.count
#
#   inside = (i - j).abs
#
#   earliest = [i, j].min
#   latest = [i, j].max
#
#   around = (n - latest) + (earliest - 0)
#   around = n - inside
#
#
#   p [inside, around].min
# end

# number_of_clicks list, "Raining Blood", "Little Deuce Coupe"
# number_of_clicks list, "Be True To Your School", "Angel of Death" # 3 (3 clicks of the Next button)
# number_of_clicks list, "Good Vibrations", "Dead Skin Mask" # 1 (1 ckick of the Previous button)
# number_of_clicks list, "Surfin USA", "Raining Blood" # 3 (3 clicks of the Next button)
