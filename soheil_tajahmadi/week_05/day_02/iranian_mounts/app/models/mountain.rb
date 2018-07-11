# == Schema Information
#
# Table name: mountains
#
#  id         :integer          primary key
#  name       :text
#  elevation  :integer
#  prominence :integer
#  image      :text
#  funfact    :text
#

class Mountain < ActiveRecord::Base
end
