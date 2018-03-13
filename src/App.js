import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateUser} from './actions/user';

class App extends Component {
    constructor(props) {
        super(props);

        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    onUpdateUser(e) {
        this.props.onUpdateUser(e.target.value);
    }

    render() {
        // console.log('Hello: ', this.props);

        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.user}</p>
                <input type="text" className="form-control" onChange={this.onUpdateUser}/>
                <button className="btn btn-default"
                        onClick={this.onUpdateUser}>Click me
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        products: state.products,
        user: state.user,
        title: props.title
    };
};

const mapActionsToProps = (dispatch, props) => {
    // console.log('Passed Props: ', props);

    return bindActionCreators({
        onUpdateUser: updateUser
    }, dispatch);
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    console.log(propsFromState, propsFromDispatch, ownProps);
    return {};
};

export default connect(
    mapStateToProps,
    mapActionsToProps,
    mergeProps
)(App);