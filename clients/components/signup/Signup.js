import React from 'react';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupAction.js';

import SignupForm from './SignupForm';

class Signup extends React.Component {
  render() {
    const { userSignupRequest } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest = {userSignupRequest} />
        </div>
      </div>
      );
  }
}

Signup.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
};

export default connect(null, {userSignupRequest} )(Signup);
 // map state to props 
 // map dispatch to props