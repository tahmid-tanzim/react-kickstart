import React, {Component} from 'react';
import CampaignItem from './CampaignItem';
import Http from '../services/Http';

class CampaignList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaigns: []
        };
    }

    deleteItem(id) {
        this.setState({
            campaigns: this.state.campaigns.filter(x => x.id !== id)
        });
    }

    componentWillMount() {
        Http.GET('get_comments')
            .then(response => {
                this.setState({
                    campaigns: [...this.state.campaigns, ...response.data]
                });
                console.log('Success campaigns: ', JSON.stringify(this.state.campaigns, null, 2));
            })
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div className="table-responsive panel panel-default">
                <div className="panel-heading">Campaign List</div>
                <div className="panel-body">
                    <p>Some default panel content here. Nulla vitae elit libero, a pharetra augue. Aenean lacinia
                        bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                        venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.campaigns.map((item, index) => <CampaignItem key={index}
                                                                             remove={this.deleteItem.bind(this)}
                                                                             value={item}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CampaignList;