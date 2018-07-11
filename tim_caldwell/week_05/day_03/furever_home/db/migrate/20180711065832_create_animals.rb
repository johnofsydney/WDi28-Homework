class CreateAnimals < ActiveRecord::Migration[5.2]
  def change
    create_table :animals do |t|
      t.text :name
      t.text :breed
      t.text :dob
      t.text :description
      t.boolean :vaccinated

      t.integer :shelter_id # to link to shelter

      t.timestamps
    end
  end
end
