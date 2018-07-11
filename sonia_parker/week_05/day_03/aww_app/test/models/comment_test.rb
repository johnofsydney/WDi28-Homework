# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  message    :text
#  author     :text
#  pet_id     :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
