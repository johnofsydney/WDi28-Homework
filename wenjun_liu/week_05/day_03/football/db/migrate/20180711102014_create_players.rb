class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.text :name
      t.text :nationality
      t.text :position
      t.date :dob
      t.integer :club_id

      t.timestamps
    end
  end
end
