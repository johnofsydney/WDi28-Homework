# == Schema Information
#
# Table name: shelters
#
#  id         :bigint(8)        not null, primary key
#  name       :text
#  postcode   :integer
#  type_name  :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Shelter < ActiveRecord::Base
  has_many :animals
end
