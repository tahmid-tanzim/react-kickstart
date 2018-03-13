import React, {Component} from 'react';

// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateUser, getUsers} from './actions/user';
import {createSelector} from 'reselect';

class App extends Component {
    constructor(props) {
        super(props);

        this.onUpdateUser = this.onUpdateUser.bind(this);
    }

    onUpdateUser(e) {
        this.props.onUpdateUser(e.target.value);
    }

    componentDidMount() {
        this.props.onGetUsers()
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

const productSelector = createSelector(
    state => state.products,
    products => products
);

const userSelector = createSelector(
    state => state.user,
    user => user
);

const mapStateToProps = createSelector(
    productSelector,
    userSelector,
    (products, user) => ({products, user})
);

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onGetUsers: getUsers
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(App);