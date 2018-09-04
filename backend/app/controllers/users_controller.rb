class UsersController < ApplicationController
    
    def allUsers
        render json: User.all
    end
    
    def newUser
       @user = User.new(user_params)

       if @user.save
        render json: {status:"success", user: @user}, status: 200
       else 
        render json: {status:"failure", errors: @user.errors.full_messages}, status: 400
       end
    end

    def showUserDetails
        @user = User.find_by(id: params[:id])
        
        if @user 
            render json: {status: "success", user: @user}, status: 200
        else
            render json: {status: "failure", errors: ["User does not exist"]}, status: 400
        end
    end

    def editUserDetails
        @user = User.find_by(id: params[:id])

        if @user
            @user.update(user_params)
            render json: {status: "success", user: @user}, status: 200
        else
            render json: {status: "failure", errors: ["User does not exist"]}, status: 400
        end
    end
    
    def deleteUser
        @user = User.find_by(id: params[:id])

        if @user
            @user.destroy
            render json: {status: "success", users: User.all}
        else 
            render json: {status: "failure", errors: ["User does not exist"]}
        end
    end


    # def login
        
    # end

    private 

    def user_params
        params.require(:user).permit(:first_name, :last_name, :username, :password)
    end
end
