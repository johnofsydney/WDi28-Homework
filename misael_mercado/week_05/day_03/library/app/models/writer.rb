# == Schema Information
#
# Table name: writers
#
#  id          :bigint(8)        not null, primary key
#  name        :text
#  nationality :text
#  dob         :date
#  epoch       :text
#  image       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Writer < ApplicationRecord
  has_many :books
end
