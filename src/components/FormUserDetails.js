import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  // React.Fragment is like a fake DOM element
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
          hintText="Enter First Name"
          floatingLableText="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          />
          <br/>
          <TextField
          hintText="Enter Last Name"
          floatingLableText="Last Name"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
          />
          <br/>
          <TextField
          hintText="Enter Email"
          floatingLableText="Email"
          onChange={handleChange('email')}
          defaultValue={values.email}
          />
          <br/>
          <RaisedButton
            label="Continue"
            primary={true}
            stye={styles.button}
            onClick={this.continue}
          />
          <br/>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
}
export default FormUserDetails;
