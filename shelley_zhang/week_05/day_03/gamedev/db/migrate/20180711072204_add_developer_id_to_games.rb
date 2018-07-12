class AddDeveloperIdToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :developer_id, :integer
  end
end
