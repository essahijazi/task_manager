class CreateAssignments < ActiveRecord::Migration[5.2]
  def change
    create_table :assignments do |t|
      t.integer :task_id
      t.integer :employee_id
      t.timestamps
    end
  end
end
