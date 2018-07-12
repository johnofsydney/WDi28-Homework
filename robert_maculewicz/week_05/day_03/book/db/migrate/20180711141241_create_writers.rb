class CreateWriters < ActiveRecord::Migration[5.2]
  def change
    create_table :writers do |t|
      t.text :name
      t.text :family
      t.text :image
      t.timestamps
    end
  end
end
