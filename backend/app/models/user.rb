class User < ApplicationRecord
    has_many :albums
    has_many :photos
    has_many :comments
    has_one_attached :avatar
    has_secure_password
    validates :username, uniqueness: {case_sensitive: false}
end
