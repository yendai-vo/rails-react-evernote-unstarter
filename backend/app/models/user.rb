class User < ApplicationRecord
    has_many :albums
    has_many :photos, through: :albums
    has_many :comments
end
