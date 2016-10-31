import React from 'react';
import _ from 'lodash';
import classname from 'classnames'; 

import Timezone from '../../data/timezone.js';


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
      email:'',
      passwordConfirmation:'',
      timezone: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    this.setState({
      errors: {},
      isLoading: true
    });
    e.preventDefault();
    this.props.userSignupRequest(this.state)
      .then(() => {
      console.log('response');
    }).catch( (error) => {
      let data = error.response.data;
      this.setState({
        errors: data,
        isLoading: false
      })
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const dropdown = _.map(Timezone, (value, index) => {
        return <option key={value} value={value}>{index}</option>
    });
    const errors = this.state.errors;
    return (
        <form name="sign-up" onSubmit={this.onSubmit}>
          <h1>Join our community</h1>
          <div className={classname("form-group", {'has-error': errors.username})}>
            <label className="control-label">Username</label>
            <input
              value={this.state.username}
              name="username"
              type="text"
              className="form-control"
              onChange={this.onChange}
              />
              { errors.username && <span className="help-block">This is Required</span>}
          </div>
          <div className={classname("form-group", {'has-error': errors.username})}>
            <label className="control-label">Email</label>
            <input
              value={this.state.email}
              name="email"
              type="text"
              className="form-control"
              onChange={this.onChange}
              />
              { errors.email && <span className="help-block">This is Required</span>}
          </div>
          <div className={classname("form-group", {'has-error': errors.username})}>
            <label className="control-label">password</label>
            <input
              value={this.state.password}
              name="password"
              type="password"
              className="form-control"
              onChange={this.onChange}
              />
              { errors.password && <span className="help-block">This is Required</span>}
          </div>
          <div className={classname("form-group", {'has-error': errors.username})}>
            <label className="control-label">Password Confirmation</label>
            <input
              value={this.state.passwordConfirmation}
              name="passwordConfirmation"
              type="password"
              className="form-control"
              onChange={this.onChange}
              />
              { errors.passwordConfirmation && <span className="help-block">This is Required</span>}
          </div>
          <div className={classname("form-group", {'has-error': errors.username})}>
            <label className="control-label">Timezone Selection</label>
            <select name="timezone" onChange={this.onChange}>
            <option value="notSelected" key="notSelect" disabled>Choose the Timezone</option>
                {dropdown}
            </select>
            { errors.timezone && <span className="help-block">This is Required</span>}
          </div>
          <div className="form-group">
            <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
        </form>
      );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
};

export default SignupForm;
