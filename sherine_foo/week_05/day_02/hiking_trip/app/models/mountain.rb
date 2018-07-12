# == Schema Information
#
# Table name: mountains
#
#  id       :integer          primary key
#  name     :text
#  image    :text
#  height   :integer
#  distance :integer
#  country  :text
#

class Mountain < ActiveRecord::Base
end
