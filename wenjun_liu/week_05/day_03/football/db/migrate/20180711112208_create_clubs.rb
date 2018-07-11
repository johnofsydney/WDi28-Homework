class CreateClubs < ActiveRecord::Migration[5.2]
  def change
    create_table :clubs do |t|
      t.text :name
      t.text :region
      t.text :img

      t.timestamps
    end
  end
end
