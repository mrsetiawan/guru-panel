import React from 'react';
import HeadTag from './head-tag';
import ScriptTag from './script-tag';

import Router from 'next/router'

export default class Login extends React.Component {

  authController;

  state = {
    identifier: "",
    password: ""
  }

  componentDidMount() {
    const Auth = require('../controllers/auth').default;
    this.authController = new Auth;
  }

  onSubmitForm = (ev) => {
    ev.preventDefault();

    this.authController.onLogin(this.state.identifier, this.state.password)
      .then(res => res.data)
      .then(data => {
        localStorage.setItem("jwt", data.jwt);
        Router.push("/");
        console.log(data);
      })


  }

  render() {
    return (
      <div className="hold-transition login-page">
        <HeadTag>
          <title>Guru Panel : Login</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
        </HeadTag>
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html"><b>Guru Ahli</b></a>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>

              <form onSubmit={this.onSubmitForm}>
                <div className="input-group mb-3">
                  <input type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={({ target }) => (this.setState({ identifier: target.value }))} />
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
                    onChange={({ target }) => (this.setState({ password: target.value }))} />
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

        <ScriptTag />
      </div>)
  }
}