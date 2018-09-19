import React, {Component} from 'react'



class Navbar extends Component {
  render() {
    if (this.props.user) {
      return (
        <React.Fragment>
        <div className="ui secondary  menu">
          <div className="right menu">
            <a onClick={this.props.handleLogout} className="ui item">
              Logout
            </a>
          </div>
        </div>
        </React.Fragment>
      )
    }else {
      return (
        <React.Fragment>
        <div className="ui secondary  menu">
          <div className="right menu">
            <a onClick={this.props.handleClickedSignIn} className="ui item">
              SignIn
            </a>
            <a onClick={this.props.handleClickedSignup} className="ui item">
              Signup
            </a>
          </div>
        </div>
        </React.Fragment>
      )
    }
  }
}


export default Navbar;
