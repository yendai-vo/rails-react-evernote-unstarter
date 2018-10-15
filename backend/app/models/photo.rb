class Photo < ApplicationRecord
    has_many :albums
    has_many :users, through: :albums
    has_many :comments
end
