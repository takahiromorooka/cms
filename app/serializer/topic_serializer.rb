class TopicSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :content,
             :description

end
