import React, {Component} from 'react'
import NewTaskForm from '../components/NewTaskForm'
import TaskList from './TaskList'

class UserContainer extends Component {
    constructor() {
        super()

        this.state = {
            allEmployees: [],
            displayTaskForm: false,
            user: null
        }
    }

    dislayCreateTaskForm = () => {
        this.setState({displayTaskForm: !this.state.displayTaskForm, errors: ""})
    }

    handleCreateNewTask = (e, selectedUserID) => {
        e.preventDefault()

        const {description, due_by} = e.target
        let task = {
            admin_id: this.props.user.id,
            description: description.value,
            due_by: due_by.value,
            completed: false,
            employee_id: selectedUserID
        }



        e.target.reset()
        fetch(`http://localhost:3000/newTask/`, {
        method: "POST",
            body: JSON.stringify({task}),
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`

            }
          })
          .then(response => response.json())
          .then(json => {
            if (json.status === "success") {

              let newDelegatedTask = {task: json.task, employee: json.employee}
              this.setState({delegatedTasks: [...this.state.delegatedTasks, newDelegatedTask], displayTaskForm: !this.state.displayTaskForm})
            }else {
              if (selectedUserID === null) {
                  this.setState({errors: [...json.errors, "Selected Employee can't be empty"] })
              }else {
                  this.setState({errors: json.errors})
              }
            }

          })

    }

    componentDidMount = () => {
      if (this.props.user) {
        if(this.props.user.isAdmin) {
          this.getAllUsers()
          this.getDelegatedTasks()
        }else {
          this.getAssignedTasks()
        }
      }
    }

    getAllUsers = () => {
        fetch('http://localhost:3000/users/')
        .then (response => response.json())
        .then(jsonUsers => this.setState({allEmployees: jsonUsers.filter(user => user.isAdmin === false || user.id === this.props.user)}))
    }

    getDelegatedTasks = () => {
      fetch('http://localhost:3000/delegatedTasks/', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(response => response.json())
        .then(tasks => this.setState({delegatedTasks: tasks.delegatedTasks}))
    }

    getAssignedTasks = () => {
      fetch(`http://localhost:3000/assignedTasks/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      .then(response => response.json())
      .then(tasks => {
        this.setState({assignedTasks: tasks.assignedTasks})
      })
    }

    render() {

        return(
          <React.Fragment>

          <div className='ui container'>

            <div className='ui floating message'>
              <h3>Welcome {this.props.user.first_name}!</h3>
            </div>


            {this.props.user.isAdmin ?
              //user is an admin
              <React.Fragment>

               {this.state.displayTaskForm ?
                 //user is an admin and create task button has been clicked
                 <NewTaskForm
                  errors={this.state.errors}
                  selectedUserID={this.selectedUserID}
                  allEmployees={this.state.allEmployees}
                  handleCreateNewTask={this.handleCreateNewTask}
                  cancel={this.dislayCreateTaskForm} />
                :
                //user is an admin and create task button has NOT been clicked
                <React.Fragment>
                  <div className="ui center aligned container">
                    <button className='ui button' onClick={this.dislayCreateTaskForm} >Create Task</button>
                  </div>
                  {this.state.delegatedTasks && this.state.delegatedTasks.length > 0 ? <TaskList isAdmin={true} tasks={this.state.delegatedTasks} />: null}
                </React.Fragment>
              }
              </React.Fragment>

            :
            //user is NOT an admin
            this.state.assignedTasks && this.state.assignedTasks.length > 0 ? <TaskList isAdmin={false} tasks={this.state.assignedTasks}/> : null}

            </div>

            </React.Fragment>
        )
    }
}

export default UserContainer;
