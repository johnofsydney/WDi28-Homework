class CreatePets < ActiveRecord::Migration[5.2]
  def change
    create_table :pets do |t|
    t.text :name
    t.text :owner_name
    t.text :image_url
    t.text :description

      t.timestamps
    end
  end
end
#comment has to belong to a pet
