import React, {Component} from 'react';
import {CATEGORY} from '../constant';

class AddCampaign extends Component {
    render() {
        return (
            <div>
                <span className="lead" style={{marginBottom: 15}}>Create New Campaign </span>
                <a onClick={() => this.props.close()} className="pointer"><i
                    className="glyphicon glyphicon-remove pull-right" style={{marginTop: 10}}/></a>
                <hr style={{marginTop: 0}}/>
                <form className="form-horizontal">
                    <div className="form-group form-group-sm">
                        <label htmlFor="title" className="col-sm-2 control-label">Title</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control input-sm" id="title" placeholder=""/>
                        </div>
                    </div>
                    <div className="form-group form-group-sm">
                        <label htmlFor="category" className="col-sm-2 control-label">Category</label>
                        <div className="col-sm-10">
                            <select className="form-control input-sm" id="category">
                                {Object.keys(CATEGORY).map((item, i) => <option key={i}
                                                                                value={item}>{CATEGORY[item]}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="form-group form-group-sm">
                        <label htmlFor="body" className="col-sm-2 control-label">Body</label>
                        <div className="col-sm-10">
                            <textarea className="form-control input-sm" id="body" rows="3"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default btn-sm">Save</button>
                            <button type="button" className="btn btn-link btn-sm">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddCampaign;
