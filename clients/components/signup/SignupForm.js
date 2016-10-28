import React from 'react';
import _ from 'lodash';

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
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
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
    return (
        <form>
          <h1>Join our community</h1>
          <div className="form-group">
            <label className="control-label">Username</label>
            <input
              value={this.state.username}
              name="username"
              type="text"
              className="form-control"
              onChange={this.onChange}
              />
          </div>
          <div className="form-group">
            <label className="control-label">Email</label>
            <input
              value={this.state.email}
              name="email"
              type="text"
              className="form-control"
              onChange={this.onChange}
              />
          </div>
          <div className="form-group">
            <label className="control-label">password</label>
            <input
              value={this.state.password}
              name="password"
              type="password"
              className="form-control"
              onChange={this.onChange}
              />
          </div>
          <div className="form-group">
            <label className="control-label">Password Confirmation</label>
            <input
              value={this.state.passwordConfirmation}
              name="passwordConfirmation"
              type="password"
              className="form-control"
              onChange={this.onChange}
              />
          </div>
          <div className="form-group">
            <label className="control-label">Timezone Selection</label>
            <select name="timezone" onChange={this.onChange}>
            <option value="notSelected" key="notSelect" disabled selected>Choose the Timezone</option>
                {dropdown}
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-lg">
              Sign Up
            </button>
          </div>
        </form>
      );
  }
}

export default SignupForm;
