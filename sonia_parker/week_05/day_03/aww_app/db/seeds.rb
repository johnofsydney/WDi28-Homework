# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Comment.destroy_all
Pet.destroy_all

#  id          :bigint(8)        not null, primary key
#  name        :text
#  owner_name  :text
#  image_url   :text
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
pet1 = Pet.create(:name => "Pupperini", :owner_name => "Ricky Gervais", :image_url => "https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=02542c89eff9e8b4ee9e472325ebd23e&auto=format&fit=crop&w=1050&q=80", :description => "Doggo ipsum heck stop it fren shoober blep, shooberino.")
pet2 = Pet.create(:name => "Blep King", :owner_name => "Kath Day-Knight", :image_url => "https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5bb3e8174f4434897bde332bdf650d93&auto=format&fit=crop&w=675&q=80", :description => "Attack the dog then pretend like nothing happened fight an alligator and win destroy couch. Find a way to fit in tiny box russian blue or put toy mouse in food bowl run out of litter box at full speed jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser .")
pet3 = Pet.create(:name => "Dundee", :owner_name => "Michael J", :image_url => "https://images.unsplash.com/photo-1511632271790-65247e635cce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=189f38fdd7496441c7bec324d8f2dcab&auto=format&fit=crop&w=1050&q=80", :description => "Croc, choc, chicken stock.")

# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  message    :text
#  author     :text
#  pet_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
comment1 = Comment.create(:message => "lalalallalalalalallallalala", :author => "Sonicakes", :pet_id =>1)
