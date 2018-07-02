# == Schema Information
#
# Table name: topics
#
#  id          :bigint(8)        not null, primary key
#  title       :string(255)      not null
#  content     :text(65535)
#  description :text(65535)
#  thumbnail   :string(255)      not null
#  status      :integer          not null
#  created_at  :datetime         not null
#  update_at   :datetime         not null
#

class Topic < ApplicationRecord
  module Status
    DRAFT = 0
    PUBLISHED = 1
  end



  mount_uploader :thumbnail, TopicThumbnailUploader

  validates :title, presence: true
  # validates :content, presence: true


end
