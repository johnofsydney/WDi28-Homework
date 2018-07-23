class CreateFoods < ActiveRecord::Migration[5.2]
  def change
    create_table :foods do |t|
    t.text :name
    t.integer : :recipe_id
    t.integer : :cuisine_id
    end
  end
end
