# == Schema Information
#
# Table name: books
#
#  id         :bigint(8)        not null, primary key
#  title      :text
#  year       :integer
#  genre      :text
#  author_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Book < ActiveRecord::Base
  belongs_to :author, :optional => true
end
