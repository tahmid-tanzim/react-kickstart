import React from 'react';

// import Navbar from './Navbar';
import Sidebar from './Sidebar';

const PrivateLayout = ({children, ...rest}) => {
    return (
        <div className="wrapper">
            <Sidebar/>

            <div id="content">
                { /*<Navbar/>*/ }
                { children }
            </div>
        </div>
    );
};

export default PrivateLayout;