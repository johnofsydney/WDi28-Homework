# == Schema Information
#
# Table name: games
#
#  id         :bigint(8)        not null, primary key
#  name       :text
#  genre      :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Game < ApplicationRecord
  belongs_to :developer, :optional => true
end
