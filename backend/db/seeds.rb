# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
PostTag.destroy_all
Tag.destroy_all
Post.destroy_all
User.destroy_all


cindy = User.create(first_name: 'Cindy', last_name: 'Vo', username: 'cind._.yvo', password: 'cindy', u_image: 'CINDY')

nancy = User.create(first_name: 'Nancy', last_name: 'Do', username: 'nancydo7', password: 'nancy', u_image: 'NANCY')

scott = User.create(first_name: 'Scott', last_name: 'Ungchusri', username: 'animog504', password: 'scott', u_image: 'SCOTT')

carlos = User.create(first_name: 'Carlos', last_name: 'Salazar', username: 'carlos_g_salazar', password: 'carlos', u_image: 'CARLOS')

#---------------Posts------------------
Post.create(image: 'pic1', title: 'my pic 1', description: 'this is pic1', user_id: 1)

Post.create(image: 'pic2', title: 'my pic 2', description: 'this is pic2', user_id: 2)

Post.create(image: 'pic3', title: 'my pic 3', description: 'this is pic3', user_id: 3)

Post.create(image: 'pic4', title: 'my pic 4', description: 'this is pic4', user_id: 4)

Post.create(image: 'pic5', title: 'my pic 5', description: 'this is pic5', user_id: 5)

Post.create(image: 'pic6', title: 'my pic 6', description: 'this is pic6', user_id: 6)

#-----------Comments--------------
Comment.create(paragraph: 'This is too cute!', user_id: 1, post_id: 4)

Comment.create(paragraph: 'You are so talented', user_id: 2, post_id: 6)

Comment.create(paragraph: 'OMG, I cannot.', user_id: 3, post_id: 2)

Comment.create(paragraph: 'Dude....', user_id: 4, post_id: 1)

Comment.create(paragraph: 'Yes!', user_id: 1, post_id: 3)

Comment.create(paragraph: 'Oh lord!', user_id: 2, post_id: 5)
