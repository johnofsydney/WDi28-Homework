# == Schema Information
#
# Table name: clubs
#
#  id         :bigint(8)        not null, primary key
#  name       :text
#  region     :text
#  img        :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Club < ApplicationRecord
  has_many :players
end
