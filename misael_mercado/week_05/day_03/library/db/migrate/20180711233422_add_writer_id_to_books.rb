class AddWriterIdToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :writer_id, :integer
  end
end
