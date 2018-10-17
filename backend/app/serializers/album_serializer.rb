class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :description, :name

  def image_url
    instance_options[:image_url].call(object.picture)
  end
end
