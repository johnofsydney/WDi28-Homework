class CreateShelters < ActiveRecord::Migration[5.2]
  def change
    create_table :shelters do |t|
      t.text :name
      t.integer :postcode
      t.text :type_name
      t.text :image

      t.timestamps
    end
  end
end
