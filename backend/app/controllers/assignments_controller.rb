class AssignmentsController < ApplicationController
    def allAssignments
        render json: Assignment.all
    end

    
end
