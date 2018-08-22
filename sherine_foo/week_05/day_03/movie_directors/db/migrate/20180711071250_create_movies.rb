class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :genre
      t.integer :rating
      t.text :image
      t.timestamps
    end
  end
end
