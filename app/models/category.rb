# == Schema Information
#
# Table name: categories
#
#  id         :bigint(8)        not null, primary key
#  name       :string(191)      not null
#  parent_id  :integer
#  alias      :string(191)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ApplicationRecord
  mount_uploader :thumbnail, CategoryThumbnailUploader

  validates :name, presence: true

  has_many :topics

end
