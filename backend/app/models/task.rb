class Task < ApplicationRecord
    belongs_to :admin, class_name: "User", foreign_key: "admin_id"
    has_many :assignments
    has_many :employees, through: :assignments

    validates_presence_of :admin_id, :description, :due_by

end
