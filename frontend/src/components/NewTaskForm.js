import React, {Component} from 'react'


class NewTaskForm extends Component {

    constructor() {
        super()
        this.state = {
            selectedUserID: null
        }
    }

    dropDownMenu = () => {
        return (
            this.props.allEmployees.map(user => {
                return <option key={user.id} value={user.id}>{user.first_name} {user.last_name}</option>
            })
        )
    }

    render() {
        return(
            <React.Fragment>
              <div className="ui grid">


                <div className="five wide column"/>
                <div className="six wide column">
                <h3 className='ui centered block header'>Create New Task</h3>
                  <div className="ui inverted segment">

                    <form className='ui inverted form' onSubmit={e => this.props.handleCreateNewTask(e, this.state.selectedUserID)} >
                      <div className='field'>
                        <label>Description</label>
                        <div className='ui fluid input'>
                          <textarea type="text" name="description" placeholder="Description" /><br/>
                        </div>
                      </div>

                      <div className='field'>
                        <label>Due By</label>
                        <div className='ui fluid input'>
                          <input type="date" name="due_by" placeholder="Due Date" /><br/>
                        </div>
                      </div>

                      <div className='field'>
                        <label>Select Employee</label>
                        <div className='ui fluid input'>
                          <select onChange={(e) => this.setState({selectedUserID: e.target.value})} >
                              <option value="" defaultValue></option>
                              {this.dropDownMenu()}
                          </select>
                        </div>
                      </div>
                      <div className="ui center aligned container">
                        <button className='ui button' type="submit">Create Task</button>
                      </div>
                    </form>
                    <br/>

                    <div className="ui center aligned container">
                      <button className='ui button' onClick={this.props.cancel}>Cancel</button>
                    </div>


                  </div>
                </div>
                <div className="five wide column"/>
              </div>





              {this.props.errors ?
                <React.Fragment>
                <div className="ui grid">
                  <div className="three wide column"/>
                  <div className="ten wide column">
                    <div className='ui error message'>
                      <div className='content'>
                        <div className='header'>Action Forbidden</div>
                        <ul>
                        {this.props.errors.map(error => <li>{error}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="three wide column"/>
                </div>
                </React.Fragment>
                : null}


            </React.Fragment>
        )
    }
}


export default NewTaskForm;
