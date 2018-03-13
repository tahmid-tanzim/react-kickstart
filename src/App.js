import React, {Component} from 'react';

import {connect} from 'react-redux';
import {updateUser} from './actions/user';

class App extends Component {
    constructor(props) {
        super(props);

        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    onUpdateUser() {
      this.props.onUpdateUser('Kazi Fatiha Akram');
    }

    render() {
        console.log('Hello: ', this.props);

        return (
            <div>
                <h1> App Component</h1>
                <p>{this.props.user}</p>
                <button className="btn btn-default"
                        onClick={this.onUpdateUser}>Click me
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        user: state.user
    };
};

const mapActionsToProps = {
    onUpdateUser: updateUser
};

export default connect(
    mapStateToProps,
    mapActionsToProps,
)(App);