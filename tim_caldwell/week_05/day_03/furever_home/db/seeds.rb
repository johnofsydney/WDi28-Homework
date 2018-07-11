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
      :type_name => 'Cat',
      :colour => 'Black',
      :dob => '2011-08-23',
      :vaccinated => true,
      :description => 'Named after Helo from Battlestar Galactica',
      :shelter_id => 1,
      :image => 'https://scontent.fsyd4-1.fna.fbcdn.net/v/t1.0-9/36585528_10155711791280686_3201249355768004608_o.jpg?_nc_cat=0&oh=fbca477128ecbe24e3feeb4ea0c1ed12&oe=5BEBC9B7',
      :state => 'NSW',
      :sex => 'Male'
    )

Shelter.create(
      :name => 'Wellpet Vets',
      :type_name => 'Vet Clinic',
      :postcode => 2745,
      :image => 'https://www.wellpet.com.au/wp-content/uploads/2015/11/NAH-Gallery-5-1024x768.jpg'
)