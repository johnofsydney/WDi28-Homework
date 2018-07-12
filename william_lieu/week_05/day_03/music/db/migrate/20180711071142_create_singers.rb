class CreateSingers < ActiveRecord::Migration[5.1]
  def change
    create_table :singers do |t|
      t.text :name
      t.text :background
      t.text :genres
      t.text :generation
      t.text :image

      t.timestamps
    end
  end
end
