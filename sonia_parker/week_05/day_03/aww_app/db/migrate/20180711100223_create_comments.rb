class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
t.text :message
t.text :author
t.integer :pet_id
      t.timestamps
    end
  end
end
