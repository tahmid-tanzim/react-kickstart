import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div className="col-md-4 col-md-offset-4">
                <div className="wrapper-box">
                    <form className="form-signin">
                        <h2 className="form-signin-heading">Please Login</h2>
                        <input type="text" className="form-control" name="username"
                               placeholder="Email Address" required="" autoFocus=""/>
                        <input type="password" className="form-control" name="password"
                               placeholder="Password" required=""/>
                        <label className="checkbox">
                            <input type="checkbox" value="remember-me" id="rememberMe"
                                   name="rememberMe" disabled/> Remember me
                        </label>
                        { /*<button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>*/ }
                        <Link to="/app/home"
                              className="btn btn-lg btn-success btn-block">Login</Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
