class TasksController < ApplicationController

    def allTasks
        render json: Task.all
    end


    def newTask

        @task = Task.new(task_params)

        if !@task.save
            render json: {status: "failure", errors: @task.errors.full_messages}, status: 400
        else
          @assignment = Assignment.new({task_id: @task.id, employee_id: assignment_params[:employee_id]})

          if !@assignment.save
              @task.destroy
              render json: {status: "failure", errors: @assignment.errors.full_messages}, status: 400
          else
              render json: {status: "success", task: @task, employee: @assignment.employee}, status: 200
          end
        end

    end


    def delegatedTasks
        tasksArray = []

        if current_user.delegated_tasks.length > 0
          current_user.delegated_tasks.each do |task|

              tasksArray << {task: task, employee: User.find(task.assignments[0].employee_id)}
          end
          render json: {status: "success", delegatedTasks: tasksArray}, status: 200
        else
          render json: {status: "failure", errors: "No Delegated Tasks"}
        end





    end

    def assignedTasks
      tasksArray = []

      current_user.assignments.each do |assignment|
        task = Task.find_by(id: assignment.task_id)
        tasksArray << {task: task, admin: task.admin}
      end

      render json: {assignedTasks: tasksArray}, status: 200

    end

    def showTaskDetails
        @task = Task.find_by(id: params[:id])

        if @task
            render json: {status: "success", task: @task}, status: 200
        else
            render json: {status: "failure", errors: ["Task does not exist"]}, status: 400
        end
    end

    def editTaskDetails
        @task = Task.find_by(id: params[:id])

        if @task
            @task.update(task_params)
            render json: {status: "success", task: @task}, status: 200
        else
            render json: {status: "failure", errors: ["Task does not exist"]}, status: 400
        end
    end

    def deleteTask
        @task = Task.find_by(id: params[:id])

        if @task
            @task.destroy
            render json: {status: "sucess", tasks: Task.all}, status: 200
        else
            render json: {status: "failure", errors: ["Task does not exist"]}, status: 400
         end
    end



    private
    def task_params
        params.require(:task).permit(:admin_id, :description, :due_by, :completed)
    end

    def assignment_params
        params.require(:task).permit(:employee_id)
    end
end
