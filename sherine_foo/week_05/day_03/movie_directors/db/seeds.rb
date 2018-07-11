Director.destroy_all
Director.create(:name => 'George Lucas', :nationality => 'America', :dob => '1944-05-14', :image => 'https://vignette.wikia.nocookie.net/labyrinth/images/a/a1/139924-george-lucas.jpg/revision/latest?cb=20111008202038')
Director.create(:name => 'Joss Whedon', :nationality => 'Ametica', :dob => '1964-06-23', :image => 'https://pmcvariety.files.wordpress.com/2018/04/joss-whedon-wonder-woman.jpg?w=1000&h=563&crop=1')
Director.create(:name => 'Patty Jeukins', :nationality => 'America', :dob => '1979-07-24', :image => 'https://pmcvariety.files.wordpress.com/2017/10/patty-jenkins-power-of-women-variety.jpg?w=1000&h=563&crop=1')
Director.create(:name => 'Peter Jackson', :nationality => 'New Zealand', :dob => '1961-10-31', :image => 'https://m.media-amazon.com/images/M/MV5BMTY1MzQ3NjA2OV5BMl5BanBnXkFtZTcwNTExOTA5OA@@._V1_UY317_CR8,0,214,317_AL_.jpg')


Movie.destroy_all
Movie.create(:title => 'Live or Let Die', :genre => 'Action', :rating => '7.2', :image => 'https://www.scifi-movies.com/images/contenu/data/0003904/affiche-vivre-et-laisser-mourir-live-and-let-die-1973-10.jpg')
Movie.create(:title => 'The Infinity War', :genre => 'Fantacy', :rating => '8.7' 'https://images-na.ssl-images-amazon.com/images/I/A1t8xCe9jwL._SL1500_.jpg')
Movie.create(:title => 'The Avengers', :genre => 'Fantacy', :rating => '8.1', :image => 'https://i.pinimg.com/originals/0f/03/e6/0f03e6733b0cf567cc92e8e20290462f.jpg')
Movie.create(:title => 'Wonder Woman', :genre => 'Fantacy', :rating => '7.5', :image => 'https://pre00.deviantart.net/b213/th/pre/i/2017/100/b/2/wonder_woman_teaseer_poster_ii_by_gerardosart-db5d9d4.jpg')
Movie.create(:title => 'Star War - A New Hope', :genre =>'Science Fiction', :rating => '8.6', :image => 'https://www.officialmerchandise.com/assets/products/349879/large/star-wars-a-new-hope-poster-13828.jpg')
Movie.create(:title => 'Indiana Jones and the Last Crusade', :genre => 'Action', :rating => '8.3', :image => 'https://static.rogerebert.com/uploads/movie/movie_poster/indiana-jones-and-the-kingdom-of-the-crystal-skull-2008/large_6Lv49E0aEusW9vKEMgQgLdetlmO.jpg')
Movie.create(:title => 'The Lord of the Rings', :genre => 'Fantasy', :rating => '8.8', :image => 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_UX182_CR0,0,182,268_AL_.jpg')
Movie.create(:title => 'Bad Taste', :genre => 'Comedy', :rating => '6.7', :image => 'https://m.media-amazon.com/images/M/MV5BZjI5ZDY5OWYtOTIwMy00MzQ3LWFlM2EtYjMzODIzZGU0NGUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg')
