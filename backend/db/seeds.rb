# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Album.destroy_all
Photo.destroy_all
User.destroy_all

cindy = User.create(first_name: 'Cindy', last_name: 'Vo', username: 'cindaay', password:'cindy')
nancy = User.create(first_name: 'Nancy', last_name: 'Do', username: 'Nancaay', password:'nancy')
dobie = User.create(first_name: 'Dobie', last_name: 'Vo', username: 'Dobs', password:'dobie')

# a1 = Album.create(name: 'Cuba', description: 'Hello', user: cindy)
# a2 = Album.create(name: 'Bali', description: 'girl', user: nancy)
# a3 = Album.create(name: 'Peru', description: 'dog', user: dobie)

# Photo.create(title: 'pic4', user: cindy, albums: [a1])
# Photo.create(title: 'pic1', user: nancy, albums: [a2])
# Photo.create(title: 'pic2', user: dobie, albums: [a3])
# Photo.create(title: 'pic3', user: cindy, albums: [a1])
# Photo.create(title: 'pic5', user: nancy, albums: [a2])
# Photo.create(title: 'pic6', user: dobie, albums: [a3])
# Photo.create(title: 'pic6', user: nancy, albums: [a2])



