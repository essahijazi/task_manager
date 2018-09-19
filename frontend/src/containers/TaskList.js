import React, {Component} from 'react'
import TaskCard from '../components/TaskCard'

class TaskList extends Component {
    render() {

      if (this.props.isAdmin) {
        return (
          <React.Fragment>
          <div className='ui floating message'>
            <p>All Delegated Tasks: </p>

            <div className="ui three cards">
              {this.props.tasks.map(obj => <TaskCard isAdmin={this.props.isAdmin} key={obj.task.id} task={obj.task} employee={obj.employee}/>)}
            </div>
          </div>
          </React.Fragment>
        )
      }else {
        return  (
          <React.Fragment>
          <div className='ui floating message'>
            <p>All Assigned Tasks: </p>

            <div className="ui three cards">
              {this.props.tasks.map(obj => <TaskCard isAdmin={this.props.isAdmin} key={obj.task.id} task={obj.task} admin={obj.admin }/>)}
            </div> 
          </div>
          </React.Fragment>
        )
      }
    }
}

export default TaskList;
