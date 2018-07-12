# == Schema Information
#
# Table name: pets
#
#  id          :bigint(8)        not null, primary key
#  name        :text
#  owner_name  :text
#  image_url   :text
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Pet < ApplicationRecord

  has_many :comments
end
