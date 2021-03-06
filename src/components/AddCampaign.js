import React, { Component } from 'react';
import { CATEGORY } from '../constant';

class AddCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: 0,
            body: '',
            isFacebookShare: true,
            error: {
                title: false,
                category: false
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.isValidForm = this.isValidForm.bind(this);
    }

    handleChange(event) {
        const {target} = event;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const {name} = target;

        this.setState({
            [name]: name === 'category' ? parseInt(value, 10) : value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.save(this.state);
    }

    handleReset() {
        this.setState({
            title: '',
            category: 0,
            body: '',
            isFacebookShare: true,
            error: {
                title: false,
                category: false
            }
        });
    }

    handleValidation(event) {
        const {name} = event.target;
        const error = {
            [name]: !this.state[name]
        };

        this.setState(previous_state => ({
            error: {
                ...previous_state.error,
                ...error
            }
        }));
    }

    isValidForm() {
        const {title, category} = this.state;
        return !(title && category);
    }

    // componentWillMount() {
    //     console.log('State: ', JSON.stringify(this.props.categoryList, null, 2))
    // }

    render() {
        const {categoryList} = this.props;
        return (
            <div>
                <span className="lead" style={ {marginBottom: 15} }>Create New Campaign</span>
                <a onClick={ () => this.props.close() } className="pointer"><i
                    className="glyphicon glyphicon-remove pull-right"
                    style={ {marginTop: 10} }/></a>
                <hr style={ {marginTop: 0} }/>
                <form className="form-horizontal" onSubmit={ this.handleSubmit }>
                    <div
                        className={ 'form-group form-group-sm'.concat(this.state.error.title ? ' has-error' : '') }>
                        <label htmlFor="title" className="col-sm-2 control-label">
                            Title<span className="text-error">*</span>
                        </label>
                        <div className="col-sm-10">
                            <input type="text"
                                   className="form-control input-sm"
                                   id="title"
                                   name="title"
                                   placeholder="i.e. 15% Money Back"
                                   value={ this.state.title }
                                   onChange={ this.handleChange }
                                   onBlur={ this.handleValidation }
                                   aria-describedby="helpTitle"/>
                            { this.state.error.title ? <span id="helpTitle"
                                                             className="help-block"
                                                             style={ {marginTop: 0} }>
                                <small style={ {fontSize: '70%'} }>Title Required</small>
                            </span> : null }
                        </div>
                    </div>
                    <div
                        className={ 'form-group form-group-sm'.concat(this.state.error.category ? ' has-error' : '') }>
                        <label htmlFor="category" className="col-sm-2 control-label">
                            Category<span className="text-error">*</span>
                        </label>
                        <div className="col-sm-10">
                            <select className="form-control input-sm"
                                    id="category"
                                    name="category"
                                    value={ this.state.category }
                                    onChange={ this.handleChange }
                                    onBlur={ this.handleValidation }
                                    aria-describedby="helpCategory">
                                { Object.keys(categoryList).map((item, i) => <option key={ i }
                                                                                     value={ item }>{ categoryList[item] }</option>) }
                            </select>
                            { this.state.error.category ? <span id="helpCategory"
                                                                className="help-block"
                                                                style={ {marginTop: 0} }>
                                <small style={ {fontSize: '70%'} }>Category Required</small>
                            </span> : null }
                        </div>
                    </div>
                    <div className="form-group form-group-sm">
                        <label htmlFor="body" className="col-sm-2 control-label">Body</label>
                        <div className="col-sm-10">
                            <textarea className="form-control input-sm"
                                      id="body"
                                      name="body"
                                      rows="4"
                                      value={ this.state.body }
                                      onChange={ this.handleChange }/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <div className="checkbox">
                                <label htmlFor="isFacebookShare">
                                    <input type="checkbox"
                                           id="isFacebookShare"
                                           name="isFacebookShare"
                                           checked={ this.state.isFacebookShare }
                                           onChange={ this.handleChange }/>
                                    <small style={ {marginTop: 2, display: 'block'} }>Share in
                                        Facebook
                                    </small>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default btn-sm"
                                    disabled={ this.isValidForm() }
                                    style={ {marginRight: 5} }>Save
                            </button>
                            <button type="button" className="btn btn-default btn-sm"
                                    onClick={ this.handleReset }>Reset
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

AddCampaign.defaultProps = {
    categoryList: {
        0: 'Please Select',
        ...CATEGORY
    }
};

export default AddCampaign;
