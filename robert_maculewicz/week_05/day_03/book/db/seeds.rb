# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Writer.destroy_all

Writer.create(
      :name => 'Harper',
      :family => 'Lee',
      :image => 'https://upload.wikimedia.org/wikipedia/commons/5/5f/HarperLee_2007Nov05.jpg'
    )


Writer.create(
  :name => 'Markus',
  :family => 'Zusak',
  :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zusak%2C_Markus._2013._Credit_Page_Thirteen.jpg/220px-Zusak%2C_Markus._2013._Credit_Page_Thirteen.jpg'
)

Publication.destroy_all

Publication.create(
  :title => 'To Kill a Mockingbird',
  :image => 'https://www.scholastic.com/content5/media/products/89/9780446310789_mres.jpg', :writer_id => 1
)

Publication.create(
  :title => 'The Underdog',
  :image => 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8629/9781862914131.jpg',
  :writer_id => 2
)
