import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCampaign } from '../actions/campaign';

class CampaignItem extends Component {
    render() {
        const {value: item} = this.props;
        return (
            <tr className="pointer">
                <td onClick={ () => this.props.select(item.userId) }> { item.id } </td>
                <td onClick={ () => this.props.select(item.userId) }> { item.title } </td>
                <td onClick={ () => this.props.select(item.userId) }> { item.body } </td>
                <td>
                    <button className="btn btn-danger btn-sm" type="submit"
                            onClick={ () => this.props.deleteCampaign(item.id) }>
                        <i className="glyphicon glyphicon-trash" aria-hidden="true"/>
                    </button>
                </td>
            </tr>
        );
    }
}

CampaignItem.propTypes = {
    deleteCampaign: PropTypes.func.isRequired
};

const mapActionsToProps = {
    deleteCampaign
};

export default connect(null, mapActionsToProps)(CampaignItem);
