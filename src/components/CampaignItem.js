import React, { Component } from 'react';

class CampaignItem extends Component {
    render() {
        const {value: item} = this.props;
        return (
            <tr>
                <td> { item.id } </td>
                <td> { item.name } </td>
                <td> { item.email } </td>
                <td> { item.body } </td>
                <td>
                    <button className="btn btn-danger btn-sm" type="submit"
                            onClick={ () => this.props.remove(item.id) }>
                        <i className="glyphicon glyphicon-trash" aria-hidden="true"/>
                    </button>
                </td>
            </tr>
        );
    }
}

export default CampaignItem;
