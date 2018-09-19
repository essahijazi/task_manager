import React, {Component} from 'react'

class TaskCard extends Component {
    render() {

      if (this.props.isAdmin) {
        return (


          <div className='ui card'>
            <div className='content'>
              <div className='header'>{this.props.employee.first_name} {this.props.employee.last_name}</div>
              <div className='description'>
                <h5 className="ui header">Description:</h5>
                <p>{this.props.task.description}</p>

              </div>
              <br/>
              <div className='description'>
                <h5 className="ui header">Due by:</h5>
                <p>{this.props.task.due_by.slice(0, 10)}</p>
              </div>
            </div>
            <div className='extra content'>
              <a>
                <p className="completed ui header">Completed: </p>
                <i aria-hidden='true' className={this.props.task.completed ? "green check circle icon" : "red check circle icon"} />
              </a>
            </div>
            <div className='extra content'>
              <div className="ui center aligned container">
                <button className="ui green button">Edit</button>
                <button className="ui red button">Delete</button>
              </div>
            </div>
          </div>


        )
      }else {
        return(

          <div className='ui card'>
            <div className='content'>
              <div className='header'>Assigned by: <p>{this.props.admin.first_name} {this.props.admin.last_name}</p></div>
              <div className='description'>
                <h5 className="ui header">Description</h5>
                <p>{this.props.task.description}</p>
              </div>
              <br/>
              <div className='description'>
                <h5 className="ui header">Due by:</h5>
                <p>{this.props.task.due_by.slice(0, 10)}</p>
              </div>
            </div>
            <div className='extra content'>
              <a>
                <p className="completed ui header">Completed: </p>
                <i aria-hidden='true' className={this.props.task.completed ? "green check circle icon" : "red check circle icon"} />
              </a>
            </div>
            <div className='extra content'>
              <div className="ui center aligned container">
                <button className="ui green button">Completed</button>
                <button className="ui red button">Incomplete</button>
              </div>
            </div>
          </div>

        )
      }

    }
}

export default TaskCard;
