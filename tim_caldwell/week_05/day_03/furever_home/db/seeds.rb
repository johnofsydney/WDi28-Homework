# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Animal.destroy_all

Animal.create(
      :name => 'Helo',
      :breed => 'DSH',
      :dob => '2011-08-23',
      :vaccinated => true,
      :description => 'Named after Helo from Battlestar Galactica',
      :shelter_id => 1
    )

Shelter.create(
      :name => 'Wellpet Vets',
      :type_name => 'Vet Clinic',
      :postcode => 2745,
      :image => 'https://www.wellpet.com.au/wp-content/uploads/2015/11/NAH-Gallery-5-1024x768.jpg'
)