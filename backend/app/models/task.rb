class Task < ApplicationRecord
    belongs_to :admin, class_name: "User", foreign_key: "admin_id"
    has_many :assignments
    has_many :employees, through: :assignments 

end
