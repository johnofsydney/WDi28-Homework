# == Schema Information
#
# Table name: animals
#
#  id          :bigint(8)        not null, primary key
#  name        :text
#  breed       :text
#  dob         :text
#  description :text
#  vaccinated  :boolean
#  shelter_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Animal < ActiveRecord::Base
  belongs_to :shelter, :optional => true
end
