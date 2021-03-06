import React from 'react';
import {Route,IndexRoute} from 'react-router';

import App from './components/App.js';
import Greetings from './components/Greetings.js';
import Signup from './components/signup/Signup.js';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Greetings} /> 
    <Route path="signup" component={Signup} />
  </Route>
)