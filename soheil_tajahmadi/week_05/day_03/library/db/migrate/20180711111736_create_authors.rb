class CreateAuthors < ActiveRecord::Migration[5.2]
  def change
    create_table :authors do |t|
      t.text     :name
      t.integer  :born
      t.text     :quote
      t.text     :funfact

      t.timestamps
    end
  end
end
