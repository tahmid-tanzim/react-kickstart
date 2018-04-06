import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const NavItem = ({location, path, children /* , match, history, */}) => {
    return (
        <li className={ location.pathname === path ? 'active' : '' }>
            <Link to={ path }>{ children }</Link>
        </li>
    );
};

export default withRouter(NavItem);