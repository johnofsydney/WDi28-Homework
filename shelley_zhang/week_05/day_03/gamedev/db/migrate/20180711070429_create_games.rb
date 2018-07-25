class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.text :name
      t.text :genre
      t.text :image
      t.timestamps
    end
  end
end
