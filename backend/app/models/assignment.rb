class Assignment < ApplicationRecord
    belongs_to :task
    belongs_to :employee, class_name: "User"
end
