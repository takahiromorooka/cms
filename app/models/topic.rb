# == Schema Information
#
# Table name: topics
#
#  id          :bigint(8)        not null, primary key
#  title       :string(255)      not null
#  content     :text(65535)
#  description :text(65535)
#  created_at  :datetime         not null
#  update_at   :datetime         not null
#

class Topic < ApplicationRecord
  mount_uploader :thumbnail, TopicThumbnailUploader

  # validates :title, presence: true
  # validates :content, presence: true


end
