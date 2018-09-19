import React, {Component} from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }

    login = e => {
        e.preventDefault();

        let params = {
          username: this.state.username,
          password: this.state.password
        };

        e.target.reset()
        let url = "http://localhost:3000/login";

        fetch(url, {
          method: "POST",
          body: JSON.stringify(params),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              localStorage.setItem("token", data.token);
              this.setState({ error: "" });
              this.props.handleLogin(data.user)
            } else {

              this.setState({ error: data.error });
            }
          });
      };

      //add Login header to match sing up page

    render() {
        return(


            <React.Fragment>

                <div className="ui grid">

                <div className="row"/>
                <div className="row"/>
                <div className="row"/>
                <div className="row"/>

                <div className="five wide column"/>
                  <div className="six wide column">
                  <h3 className='ui centered block header'>Login</h3>
                    <div className='ui inverted segment'>
                      <form onSubmit={e => this.login(e)} className='ui inverted form'>
                        <div className='field'>
                          <label>Username</label>
                          <div className='ui fluid input'>
                            <input type="text" placeholder="Username" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
                          </div>
                        </div>
                        <div className='field'>
                          <label>Password</label>
                          <div className='ui fluid input'>
                            <input type="password" placeholder="Password" value={this.state.password} onChange={e => this.setState({password: e.target.value})} />
                          </div>
                        </div>
                        <button type='submit' className='ui center button'>
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="five wide column"/>
                </div>


                {this.state.error ?
                  <div className="ui grid">
                    <div className="three wide column"/>
                    <div className="ten wide column">
                      <div className='ui error message'>
                        <div className='content'>
                          <div className='header'>Action Forbidden</div>
                          <ul>
                            <li>{this.state.error}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="three wide column"/>
                  </div>
                   : null}





            </React.Fragment>
        )
    }
}

export default Login;
