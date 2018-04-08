import React, { Component } from 'react';

// import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default" style={ {marginBottom: 25} }>
                <div className="container-fluid">
                    <div className="navbar-header">
                        { /*<button type="button" id="sidebarCollapse"*/ }
                        { /*className="btn btn-default navbar-btn">*/ }
                        { /*<i className="glyphicon glyphicon-indent-left"/>*/ }
                        { /*<span>Toggle Sidebar</span>*/ }
                        { /*</button>*/ }
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="https://ipay.com.bd">Page 1</a></li>
                            <li><a href="https://ipay.com.bd">Page 2</a></li>
                            <li><a href="https://ipay.com.bd">Page 3</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
