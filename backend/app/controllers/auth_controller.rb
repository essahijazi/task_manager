class AuthController < ApplicationController
    skip_before_action :authenticate, only: [:login]


   def login

     @current_user = User.find_by(username: params[:username])
     if @current_user && @current_user.authenticate(params[:password])

       token = encode({user_id: @current_user.id})
       render json: {token: token, success: true, user: @current_user}
     else

       render json: {error: "Invalid Username/Password", success: false }
     end
   end
end
