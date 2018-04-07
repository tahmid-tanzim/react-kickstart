import React, {Component} from 'react';
import {CATEGORY} from '../constant';

class AddCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            category: "",
            isFacebookShare: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event) {
        const {target} = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const {name} = target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('handleSubmit', event);
    }

    handleReset() {
        const default_campaign = {
            title: "",
            body: "",
            category: "",
            isFacebookShare: true
        };
        this.setState(default_campaign);
    }

    render() {
        return (
            <div>
                <span className="lead" style={{marginBottom: 15}}>Create New Campaign</span>
                <a onClick={() => this.props.close()} className="pointer"><i
                    className="glyphicon glyphicon-remove pull-right" style={{marginTop: 10}}/></a>
                <hr style={{marginTop: 0}}/>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group form-group-sm">
                        <label htmlFor="title" className="col-sm-2 control-label">Title</label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control input-sm"
                                   id="title"
                                   name="title"
                                   placeholder="i.e. 15% Money Back"
                                   value={this.state.title}
                                   onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group form-group-sm">
                        <label htmlFor="category" className="col-sm-2 control-label">Category</label>
                        <div className="col-sm-10">
                            <select className="form-control input-sm"
                                    id="category"
                                    name="category"
                                    value={this.state.category}
                                    onChange={this.handleChange}>
                                <option>Please Select</option>
                                {Object.keys(CATEGORY).map((item, i) => <option key={i}
                                                                                value={item}>{CATEGORY[item]}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="form-group form-group-sm">
                        <label htmlFor="body" className="col-sm-2 control-label">Body</label>
                        <div className="col-sm-10">
                            <textarea className="form-control input-sm"
                                      id="body"
                                      name="body"
                                      rows="3"
                                      value={this.state.body}
                                      onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="checkbox">
                                <label htmlFor="isFacebookShare">
                                    <input type="checkbox"
                                           id="isFacebookShare"
                                           name="isFacebookShare"
                                           checked={this.state.isFacebookShare}
                                           onChange={this.handleChange}/>
                                    <small style={{marginTop: 2, display: 'block'}}>Share in Facebook</small>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default btn-sm">Save</button>
                            <button type="button" className="btn btn-link btn-sm"
                                    onClick={this.handleReset}>Reset
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddCampaign;
