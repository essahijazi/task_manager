class User < ApplicationRecord
    #admin relationship
    has_many :delegated_tasks, foreign_key: "admin_id", class_name: "Task"
    has_many :delegated_assignments, through: :delegated_tasks, foreign_key: "admin_id", source: :assignments
    
    #employee relationship
    has_many :assignments, foreign_key: "employee_id"
    has_many :tasks, through: :assignments, foreign_key: "employee_id"

    #validations
    validates :username, presence: true, uniqueness: {case_sensitive: false} 
    validates_presence_of :first_name, :last_name, :password_digest
    
    has_secure_password



end
