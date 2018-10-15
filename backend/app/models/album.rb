class Album < ApplicationRecord
    belongs_to :user
    belongs_to :photo
    has_one_attached :picture
end
