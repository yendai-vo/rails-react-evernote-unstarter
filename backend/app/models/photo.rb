class Photo < ApplicationRecord
    has_many :photoalbums
    has_many :albums, through: :photoalbums
    belongs_to :user
    has_many :comments
end
