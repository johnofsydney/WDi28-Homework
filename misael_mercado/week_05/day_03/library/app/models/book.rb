# == Schema Information
#
# Table name: books
#
#  id         :bigint(8)        not null, primary key
#  title      :text
#  year       :text
#  genre      :text
#  cover      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Book < ApplicationRecord
  belongs_to :writer
end
