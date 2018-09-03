class User < ApplicationRecord
    #admin relationship
    has_many :delegated_tasks, foreign_key: "admin_id", class_name: "Task"
    has_many :delegated_assignments, through: :delegated_tasks, foreign_key: "admin_id", source: :assignments
    




    #employee relationship
    has_many :assignments, foreign_key: "employee_id"
    has_many :tasks, through: :assignments, foreign_key: "employee_id"
    
    has_secure_password
end
