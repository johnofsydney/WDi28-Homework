# == Schema Information
#
# Table name: mountains
#
#  id        :integer          primary key
#  name      :text
#  height    :float
#  latitude  :float
#  longitude :float
#  image     :text
#

class Mountain < ActiveRecord::Base
end
