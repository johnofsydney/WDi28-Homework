# == Schema Information
#
# Table name: developers
#
#  id           :bigint(8)        not null, primary key
#  name         :text
#  headquarters :text
#  image        :text
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Developer < ApplicationRecord
  has_many :games
end
