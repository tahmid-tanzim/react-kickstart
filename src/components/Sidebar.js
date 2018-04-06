import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.png';

import NavItem from './NavItem';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: false
        };
    }

    render() {
        return (
            <nav id="sidebar" className={this.state.isCollapsed ? 'active' : ''}>
                <div className="sidebar-header pointer"
                     id="sidebarCollapse"
                     onClick={() => this.setState({isCollapsed: !this.state.isCollapsed})}>
                    <img src={logo} alt="iPay Logo"/>
                    <div className="sidebar-title">Admin Dashboard</div>
                </div>

                <ul className="list-unstyled components">
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                            <i className="glyphicon glyphicon-home"/>
                            Home
                        </a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li><Link to="/app/home">Page 1</Link></li>
                            <li><Link to="/app/home">Page 2</Link></li>
                        </ul>
                    </li>
                    <NavItem path="/app/home">
                        <i className="glyphicon glyphicon-link"/>
                        Page 1
                    </NavItem>
                    <NavItem path="/app/home">
                        <i className="glyphicon glyphicon-paperclip"/>
                        page 2
                    </NavItem>
                    <li>
                        <a href="https://ipay.com.bd">
                            <i className="glyphicon glyphicon-briefcase"/>
                            About
                        </a>
                        <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">
                            <i className="glyphicon glyphicon-duplicate"/>
                            Settings
                        </a>
                        <ul className="collapse list-unstyled" id="pageSubmenu">
                            <li><a href="https://ipay.com.bd">Business Rule</a></li>
                            <li><a href="https://ipay.com.bd">Fees & Charges</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://ipay.com.bd">
                            <i className="glyphicon glyphicon-send"/>
                            Contact
                        </a>
                    </li>
                </ul>

                <ul className="list-unstyled CTAs">
                    <li>
                        <a href="https://www.google.com" className="article">User Profile</a>
                    </li>
                    <li>
                        <Link to="/login" className="download">Logout</Link>
                    </li>

                </ul>
            </nav>
        );
    }
};

export default Sidebar;