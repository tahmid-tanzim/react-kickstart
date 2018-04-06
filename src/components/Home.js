import React, {Component} from 'react';

import Title from './Title';
import CampaignList from './CampaignList';

class Home extends Component {
    render() {
        return (
            <div>
                <Title value="Home"/>
                <CampaignList/>
            </div>
        );
    }
}

export default Home;
