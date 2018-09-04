Rails.application.routes.draw do

  #users routes
  # post '/login', to: 'users#login'
  
  get '/users', to: 'users#allUsers'
  
  get '/users/:id', to: 'users#showUserDetails'
  post '/users/:id', to: 'users#editUserDetails'
  delete '/users/:id', to: 'users#deleteUser'

  post '/newUser', to: 'users#newUser'


  #tasks routes
  get '/tasks', to: 'tasks#allTasks'

  get '/tasks/:id', to: 'tasks#showTaskDetails'
  post '/tasks/:id', to: 'tasks#editTaskDetails'
  delete '/tasks/:id', to: 'tasks#deleteTask'
  
  post '/users/:id/newTask', to: 'tasks#newTask'

end
