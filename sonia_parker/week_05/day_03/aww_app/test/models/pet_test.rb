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

require 'test_helper'

class PetTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
