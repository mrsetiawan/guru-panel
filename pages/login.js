import React from 'react';
import Router from 'next/router'
import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
const AuthController  = require('../controllers/auth').default;

const headTag = () => (<>
  <link rel="stylesheet" href="/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
</>);


export default class Login extends React.Component {

  authController; 
  state = {
    identifier: "",
    password: ""
  }

  componentDidMount(){
    this.authController = new AuthController();
  }

  onSubmitForm = (ev) =>  {
    ev.preventDefault();
    
    console.log('auth', this.authController)
    this.authController.onLogin(this.state.identifier, this.state.password)
          .then(res => res.data)
          .then(data => {
            localStorage.setItem("jwtToken",  data.jwt);
            Router.push("/");
            console.log(data);
          })
    

  }

    render(){
        return(
          <Layout title="Guru Ahli : Login Page" headTag={headTag} >
            <div className="hold-transition login-page">
                <div className="login-box">
                  <div className="login-logo">
                    <b>Guru Ahli</b>
                  </div>
                  <div className="card">
                    <div className="card-body login-card-body">
                      <p className="login-box-msg">Sign in to start your session</p>

                      <form onSubmit={this.onSubmitForm}>
                        <div className="input-group mb-3">
                          <input type="text" 
                                  className="form-control" 
                                  placeholder="Email"
                                  onChange={({target}) => (this.setState({ identifier: target.value }) )}  />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-envelope"></span>
                            </div>
                          </div>
                        </div>
                        <div className="input-group mb-3">
                          <input type="password" 
                                  className="form-control" 
                                  placeholder="Password" 
                                  onChange={({target}) => (this.setState({ password: target.value }) )} />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-lock"></span>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-8">
                            <div className="icheck-primary">
                              <input type="checkbox" id="remember" />
                              <label htmlFor="remember">
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <div className="col-4">
                            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                          </div>
                        </div>
                      </form>
                      
                      <p className="mb-1">
                        <a href="#">I forgot my password</a>
                      </p>

                    </div>
                  </div>
                </div>
            </div>
            </Layout>)
    }
}