# == Schema Information
#
# Table name: mountains
#
#  id      :integer          primary key
#  name    :text
#  type    :text
#  country :text
#  height  :float
#

class Mountain < ActiveRecord::Base
end
