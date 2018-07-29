class TopicSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :content,
             :description

  belongs_to :category
end
