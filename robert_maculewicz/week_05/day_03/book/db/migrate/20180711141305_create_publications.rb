class CreatePublications < ActiveRecord::Migration[5.2]
  def change
    create_table :publications do |t|
        t.text :title
        t.text :image
        t.integer :writer_id
        t.timestamps

    end
  end
end
