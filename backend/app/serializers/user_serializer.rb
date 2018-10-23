class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username

  # def jwt
  #   instance_options[:get_token].call(object.id)
  # end
end
