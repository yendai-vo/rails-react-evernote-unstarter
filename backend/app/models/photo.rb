class Photo < ApplicationRecord
    has_many :photoalbums
    has_many :albums, through: :photoalbums
    belongs_to :album
    has_many :comments
    has_one_attached :picture
end
