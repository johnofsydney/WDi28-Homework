# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Developer.destroy_all
Developer.create(:name => 'Blizzard Entertainment', :headquarters => 'United States', :image =>  'https://upload.wikimedia.org/wikipedia/commons/b/b2/Blizzard_Entertainment_Logo.svg')
Developer.create(:name => 'CD Projeckt', :headquarters => 'Poland', :image =>  'https://upload.wikimedia.org/wikipedia/en/b/bf/CD_Projekt_Logo.png')

Game.destroy_all
Game.create(:name => 'Diablo III', :genre => 'Action RPG', :image => 'https://upload.wikimedia.org/wikipedia/en/8/80/Diablo_III_cover.png')
Game.create(:name => 'The Witcher III', :genre => 'Action RPG', :image => 'https://images.g2a.com/newlayout/323x433/1x1x0/06114476276e/59108976ae653aa55c6ac1f2')
