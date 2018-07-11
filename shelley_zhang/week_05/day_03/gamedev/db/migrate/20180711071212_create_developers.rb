class CreateDevelopers < ActiveRecord::Migration[5.2]
  def change
    create_table :developers do |t|
      t.text :name
      t.text :headquarters
      t.text :image
      t.timestamps
    end
  end
end
