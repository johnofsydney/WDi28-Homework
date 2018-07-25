class Album < ActiveRecord::Base
  belongs_to :singer, :optional => true
endq
