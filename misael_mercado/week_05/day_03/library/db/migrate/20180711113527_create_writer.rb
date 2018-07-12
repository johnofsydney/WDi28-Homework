class CreateWriter < ActiveRecord::Migration[5.2]
  def change
    create_table :writers do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :epoch
      t.text :image

      t.timestamps
    end
  end
end
