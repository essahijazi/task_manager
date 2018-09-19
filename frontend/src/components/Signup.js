import React, {Component} from 'react'

class Signup extends Component {
    render() {
        return(
          <React.Fragment>

            <div className="ui grid">

              <div className="row"/>
              <div className="row"/>


              <div className="five wide column"/>
              <div className="six wide column">
                <h3 className='ui centered block header'>Create New User</h3>

                <div className='ui inverted segment'>
                  <form className='ui inverted form' onSubmit={e => this.props.handleCreateNewUser(e)}>
                    <div className='field'>
                      <label>First Name</label>
                      <input type="text" name="first_name" placeholder="First Name" />
                    </div>
                    <div className='field'>
                      <label>Last Name</label>
                      <input type="text" name="last_name" placeholder="Last Name" />
                    </div>
                    <div className='field'>
                      <label>Username</label>
                      <input type="text" name="username" placeholder="Username"/>
                    </div>
                    <div className='field'>
                      <label>Password</label>
                      <input type="Password" name="password" placeholder="Password"/>
                    </div>
                    <div className='field'>
                      <div className='ui checkbox'>
                        <input type="checkbox" name="isAdmin" /><br/>
                        <label>Signup as Admin</label>
                      </div>
                    </div>
                    <button type='submit' className='ui button'>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
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
                        {this.props.errors.map((error, index) => <li key={index} >{error}</li>)}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="three wide column"/>
                </div>
                </React.Fragment>
                : null}


          </React.Fragment>


          // <React.Fragment>
          //   <form onSubmit={e => this.props.handleCreateNewUser(e)}>
          //       <input type="text" name="first_name" placeholder="First Name" /><br/>
          //       <input type="text" name="last_name" placeholder="Last Name" /><br/>
          //       <input type="text" name="username" placeholder="Username"/><br/>
          //       <input type="Password" name="password" placeholder="Password"/><br/>
          //       <label>Sign Up as Admin?</label><br/>
          //       <input type="checkbox" name="isAdmin"/><br/>
          //       <button type="">Sign Up</button><br/>
          //   </form>
          // </React.Fragment>
        )
    }
}

export default Signup
