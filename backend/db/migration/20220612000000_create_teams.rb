class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name
      t.string :captain
      t.uuid :identifier
 
      t.timestamps
    end
  end
end