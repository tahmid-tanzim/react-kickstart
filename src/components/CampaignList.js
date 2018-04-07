import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

import CampaignItem from './CampaignItem';
import Modal from './Modal';
import Http from '../services/Http';
import spinner from '../images/ajax-loader.gif';

const AnyReactComponent = ({text}) => <div>{text}</div>;

class CampaignList extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    constructor(props) {
        super(props);
        this.state = {
            campaigns: [],
            user: {},
            modalIsOpen: false,
            isLoading: false
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.selectItem = this.selectItem.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
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
                console.log('Get Success campaigns: ', JSON.stringify(this.state.campaigns, null, 2));
            })
            .catch(error => console.error(error));
    }

    render() {
        const {campaigns, user, modalIsOpen, isLoading} = this.state;
        return (
            <div>
                <div className="panel panel-default table-responsive">
                    <div className="panel-heading clearfix">
                        <h3 className="panel-title pull-left"
                            style={{padding: '7.5px 0'}}>Campaign List</h3>
                        {isLoading ? <img src={spinner} className="pull-right" style={{
                            width: 20,
                            height: 20,
                            marginTop: 5,
                            marginRight: 10
                        }} alt="Ajax Loader"/> : null}
                    </div>
                    <div className="panel-body">
                        <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia
                            bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                            venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    </div>
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
                                        <strong>{user.name}</strong> <small>{user.email}</small><br/>
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

export default CampaignList;

/*
        const foo = {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        };

        AIzaSyBZJjp8FVa0BRrelvYpIzYVm8dw3yse1qM
        */