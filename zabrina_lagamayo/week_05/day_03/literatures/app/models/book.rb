class Book < ApplicationRecord
  belongs_to :author, :optional => true

end
