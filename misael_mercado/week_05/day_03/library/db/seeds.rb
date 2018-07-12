# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Writer.destroy_all
Writer.create(:name => 'Gérard de Nerval', :nationality => 'French', :dob => '1808-05-22', :epoch => '1808-1895', :image => 'https://upload.wikimedia.org/wikipedia/commons/0/03/F%C3%A9lix_Nadar_1820-1910_portraits_G%C3%A9rard_de_Nerval.jpg')
Writer.create(:name => 'Michel Houellebecq', :nationality => 'French', :dob => '1956-02-07', :epoch => '1956 - present', :image => 'https://upload.wikimedia.org/wikipedia/commons/6/66/2008.06.09._Michel_Houellebecq_Fot_Mariusz_Kubik_03.jpg')
Writer.create(:name => 'Yukio Mishima', :nationality => 'Japanese', :dob => '1956-02-07', :epoch => '1941–1970', :image => 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Yukio_Mishima.jpg')



Book.destroy_all
Book.create(:title => 'The Elementary Particles', :year => '1988', :genre => 'Fiction', :cover => 'https://upload.wikimedia.org/wikipedia/en/7/75/Atomised.jpg')
Book.create(:title => 'Aurelia', :year => '1855', :genre => 'Fiction', :cover => 'https://www.appledorebookshop.com/pictures/10244.jpg')
Book.create(:title => 'The Sailor Who Fell from Grace with the Sea', :year => '1963', :genre => '	Philosophical fiction', :cover => 'https://upload.wikimedia.org/wikipedia/en/1/1c/TheSailorWhoFellFromGracewiththeSea.PNG')
