class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :content,
             :description

end
