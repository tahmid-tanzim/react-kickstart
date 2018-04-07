import React, {Component} from 'react';
import {connect} from 'react-redux'
import GoogleMapReact from 'google-map-react';

import CampaignItem from './CampaignItem';
import AddCampaign from './AddCampaign';
import Modal from './Modal';
import Alerts from './Alerts';
import Http from '../services/Http';
import spinner from '../images/ajax-loader.gif';

import {getCampaigns} from '../actions/campaign';

const AnyReactComponent = ({text}) => <div>{text}</div>;

class CampaignList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: [],
            user: {},
            modalIsOpen: false,
            isLoading: false,
            showForm: false,
            resetForm: false,
            alert: null
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
        this.handleShowForm = this.handleShowForm.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    deleteItem(id) {
        this.setState({
            isLoading: true
        });

        Http.DELETE('posts', `/${id}`)
            .then(response => {
                this.setState({
                    campaigns: this.state.campaigns.filter(x => x.id !== id),
                    isLoading: false
                });
                console.log('Delete success campaigns: ', JSON.stringify(response, null, 2));
            })
            .catch(error => console.error(error));
    }

    selectItem(userId) {
        this.setState({
            isLoading: true
        });

        Http.GET('users', `/${userId}`)
            .then(({data}) => {
                this.setState({
                    modalIsOpen: true,
                    isLoading: false,
                    user: {...data}
                });
                console.log('Get success users: ', JSON.stringify(data, null, 2));
            })
            .catch(error => console.error(error));
    }

    onCloseModal() {
        this.setState({modalIsOpen: false});
    }

    handleShowForm(flag) {
        this.setState({
            showForm: flag,
            alert: null
        });
    }

    addItem({title, category, body, isFacebookShare}) {
        this.setState({
            isLoading: true
        });

        Http.POST('posts', {title, category, body, isFacebookShare})
            .then(response => {
                this.setState({
                    campaigns: [...this.state.campaigns, response.data],
                    alert: {
                        message: response.statusText || "Create a New Campaign Successfully",
                        type: 'success'
                    },
                    isLoading: false,
                    resetForm: true
                });
                console.log('Add success campaigns: ', JSON.stringify(response, null, 2));
            })
            .catch(error => console.error(error));
    }

    componentWillMount() {
        this.setState({
            isLoading: true
        });

        Http.GET('posts')
            .then(response => {
                this.setState({
                    campaigns: [...this.state.campaigns, ...response.data],
                        isLoading: false
                });
            })
            .catch(error => console.error(error));

        this.props.getCampaigns();

    }

    render() {
        const {campaigns, user, modalIsOpen, isLoading, showForm, resetForm, alert} = this.state;
        console.log('campaigns: ', JSON.stringify(this.props.test, null, 2));
        return (
            <div>
                <div className="panel panel-default table-responsive">
                    <div className="panel-heading clearfix">
                        <h3 className="panel-title pull-left"
                            style={{padding: 7.5}}>Campaign List</h3>

                        <button className="btn btn-default pull-right"
                                data-toggle="tooltip"
                                data-placement="left"
                                title="Create New Campaign"
                                disabled={showForm}
                                onClick={() => this.handleShowForm(true)}>
                            <i className="glyphicon glyphicon-plus" style={{top: 2}}/>
                        </button>

                        {isLoading ? <img src={spinner} className="pull-right" style={{
                            width: 20,
                            height: 20,
                            marginTop: 5,
                            marginRight: 10
                        }} alt="Ajax Loader"/> : null}
                    </div>
                    {showForm ? <div className="panel-body">
                        <div className="row">
                            <div className="col-md-7">
                                <AddCampaign
                                    reset={resetForm}
                                    save={this.addItem}
                                    close={() => this.handleShowForm(false)}/>
                            </div>
                            {alert ? <div className="col-md-5">
                                <Alerts type={alert.type} value={alert.message}/>
                            </div> : null}
                        </div>
                    </div> : null}
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {campaigns.map((item, index) => <CampaignItem key={index}
                                                                      select={this.selectItem}
                                                                      remove={this.deleteItem}
                                                                      value={item}/>)}
                        </tbody>
                    </table>
                </div>
                <Modal id={`User_Info_Modal`}
                       title={`User's Information`}
                       show={modalIsOpen}
                       action={{
                           close: this.onCloseModal
                       }}>
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1">
                            {typeof user.address !== 'undefined' ?
                                <div>
                                    <address>
                                        <strong>{user.name}</strong>
                                        &nbsp;
                                        <small>{user.email}</small>
                                        <br/>
                                        {user.address.street + ', ' + user.address.suite}<br/>
                                        {user.address.city + ', ' + user.address.zipcode}<br/>
                                        <abbr title="Phone">P:</abbr> {user.phone}
                                    </address>
                                    <div style={{height: '30vh', width: '100%'}}>
                                        <GoogleMapReact
                                            bootstrapURLKeys={{key: 'AIzaSyBZJjp8FVa0BRrelvYpIzYVm8dw3yse1qM'}}
                                            defaultCenter={this.props.center}
                                            defaultZoom={this.props.zoom}>
                                            <AnyReactComponent
                                                lat={user.address.geo.lat}
                                                lng={user.address.geo.lng}
                                                text={user.username}/>
                                        </GoogleMapReact>
                                    </div>
                                </div> : null}
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

CampaignList.defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
};

const mapStateToProps = state => ({
    test: state.campaignReducer.campaigns
});

export default connect(
    mapStateToProps,
    {getCampaigns})(CampaignList);