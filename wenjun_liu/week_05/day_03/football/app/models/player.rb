# == Schema Information
#
# Table name: players
#
#  id          :bigint(8)        not null, primary key
#  name        :text
#  nationality :text
#  position    :text
#  dob         :date
#  club_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Player < ApplicationRecord
  belongs_to :club, :optional => true
end
