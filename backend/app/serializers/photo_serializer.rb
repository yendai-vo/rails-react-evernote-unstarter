class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :title

  def image_url
    instance_options[:image_url].call(object.picture)
  end
end
