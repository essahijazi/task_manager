Rails.application.routes.draw do

  #users routes
  get '/users', to: 'users#allUsers'

  # get '/users/:id', to: 'users#showUserDetails'
  get '/user', to: 'users#showUserDetails'
  post '/users/:id', to: 'users#editUserDetails'
  delete '/users/:id', to: 'users#deleteUser'

  post '/newUser', to: 'users#newUser'


  #tasks routes
  get '/tasks', to: 'tasks#allTasks'
  get '/delegatedTasks', to: 'tasks#delegatedTasks'
  get '/assignedTasks', to: 'tasks#assignedTasks'

  get '/tasks/:id', to: 'tasks#showTaskDetails'
  post '/tasks/:id', to: 'tasks#editTaskDetails'
  delete '/tasks/:id', to: 'tasks#deleteTask'

  post '/newTask', to: 'tasks#newTask'

  #assignment routes

  get 'assignments', to: 'assignments#allAssignments'

  post '/newAssignment', to: 'assignments#newAssignment'





  post '/login', to: 'auth#login'

end
