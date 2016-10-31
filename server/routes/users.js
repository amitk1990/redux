import express from 'express';
import Validator from 'validator';
import _ from 'lodash';

let router = express.Router();

function validateInput(userData) {
  let errors = {};
  if(_.isEmpty(userData.username)) {
    errors.username = 'this is field is required';
  }
  if(_.isEmpty(userData.email)) {
    errors.email = 'this is field is required';
  }
  if(!Validator.isEmail(userData.email)) {
    errors.email = 'this is Email is required';
  };
  if(_.isEmpty(userData.password)) {
    errors.password = 'this is field is required';
  }
  if(_.isEmpty(userData.passwordConfirmation)) {
    errors.passwordConfirmation = 'this is field is required';
  }
  if(_.isEmpty(userData.timezone)) {
    errors.timezone = 'this is field is required';
  }
  if(!Validator.equals(userData.password, userData.passwordConfirmation)) {
    errors.passwordConfirmation = 'Passwords don\'t match';
  }
  
  return { 
    errors, 
    isValid: _.isEmpty(errors) 
  };
}

router.post('/', (req, res) => {
  const { errors, isValid } = validateInput(req.body);
  console.log(errors);
  if(!isValid) {
    res.status(400).send(errors: errors);
  }
});

export default router;

