class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :description, :name
  has_many :photos

  # def image_url
  #   instance_options[:image_url].call(object.picture)
  # end
end
