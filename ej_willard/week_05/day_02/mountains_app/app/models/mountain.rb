# == Schema Information
#
# Table name: mountains
#
#  id       :integer          primary key
#  name     :text
#  height   :float
#  volcanic :boolean
#  image    :text
#

class Mountain < ActiveRecord::Base
end
