class CreateOceans < ActiveRecord::Migration[5.2]
  def change
    create_table :oceans do |t|
      t.string :name
      t.integer :average_depth
      t.string :image_url

      t.timestamps
    end
  end
end
