class TopicSerializer < ActiveModel::Serializer
  attributes :id,
             :title,
             :content,
             :description,
             :status

  belongs_to :category
end
