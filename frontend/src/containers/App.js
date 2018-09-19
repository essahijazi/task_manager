import React, { Component } from 'react';
import Login from '../components/Login';
import UserContainer from '../containers/UserContainer';
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'



class App extends Component {

  constructor () {
    super()
    this.state = {
      user: null,
      loggedIn: !!localStorage.token,
      open: false,
      clickedSignup: false
    }
  }

  handleClickedSignup = () => {
    this.setState({clickedSignup: true})
  }

  handleClickedSignIn = () => {
    this.setState({clickedSignup: false, errors: ""})
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleLoggedIn = (user) => {
    this.setState({loggedIn: true, user: user})
  }

  handleLoggedOut = () => {
    localStorage.clear()
    this.setState({loggedIn: false, user:null})
  }

  handleCreateNewUser = (e) => {
    e.preventDefault()

    const {first_name, last_name, username, password, isAdmin} = e.target
    const user = {first_name: first_name.value,
                  last_name: last_name.value,
                  username: username.value,
                  password: password.value,
                  isAdmin: isAdmin.checked
                }

    e.target.reset()


    fetch('http://localhost:3000/newUser/', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify( {user})
    }).then(res => res.json())
    .then(jsonData => {
      if (jsonData.status === "success") {
        localStorage.setItem("token", jsonData.token)
        this.setState({loggedIn: true, user: jsonData.user, clickedSignup: false, errors: ""})
      }else {
        this.setState({errors: jsonData.errors})
      }
    })
  }


componentDidMount() {
 if (localStorage.token) {
   fetch('http://localhost:3000/user/', {
     headers: {
       Authorization: `Bearer ${localStorage.getItem("token")}`
     }
   })
   .then(response => response.json())
   .then(userJSON => {
     this.setState({user: userJSON.user})
   })
 }
}

  render() {
    if (this.state.clickedSignup) {
      return (
        <React.Fragment>
          <Navbar user={this.state.user} handleLogout={this.handleLoggedOut} handleClickedSignup={this.handleClickedSignup} handleClickedSignIn={this.handleClickedSignIn}/>
          <Signup errors={this.state.errors} returnToLogin={this.handleClickedSignup} handleCreateNewUser={this.handleCreateNewUser} />
        </React.Fragment>
      )
    }else {
      return (
        <React.Fragment>
        <Navbar user={this.state.user} handleLogout={this.handleLoggedOut} handleClickedSignup={this.handleClickedSignup} />
        {this.state.user ?
          <UserContainer user={this.state.user}/>
          :
          <Login handleLogin={this.handleLoggedIn} />
        }
        </React.Fragment>
      )
    }
  }
}

export default App;
