class Album < ApplicationRecord
    belongs_to :user
    has_many :photoalbums
    has_many :photos, through: :photoalbums
    #has_one_attached :picture
end
 