class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.text :title
      t.integer : :serving_id
      t.title :ingredient_id

      t.timestamps

    end
  end
end
