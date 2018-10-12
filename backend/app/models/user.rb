class User < ApplicationRecord
  has_many :posts
  has_many :comments
  has_secure_password
  # has_one_attached :u_image
end
