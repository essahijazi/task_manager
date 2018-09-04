class TasksController < ApplicationController

    def allTasks
        render json: Task.all
    end


    def newTask
        task_obj = task_params
        task_obj[:admin_id] = params[:id]
        
        @task = Task.new(task_obj)
        
        if @task.save
            render json: {status: "success", task: @task}, status: 200
        else
            render json: {status: "failure", errors: @task.errors.full_messages}, status: 400
        end
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



    private
    def task_params
        params.require(:task).permit(:description, :due_by, :completed)
    end
end
