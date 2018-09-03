class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :admin_id
      t.string :description
      t.datetime :due_by
      t.boolean :completed
      t.timestamps
    end
  end
end
