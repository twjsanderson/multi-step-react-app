import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  // React.Fragment is like a fake DOM element
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Personal Details" />
          <TextField
          hintText="Enter Occupation"
          floatingLableText="Occupation"
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
          />
          <br/>
          <TextField
          hintText="Enter Your City"
          floatingLableText="City"
          onChange={handleChange('city')}
          defaultValue={values.city}
          />
          <br/>
          <TextField
          hintText="Enter Your Bio"
          floatingLableText="Bio"
          onChange={handleChange('bio')}
          defaultValue={values.bio}
          />
          <br/>
          <RaisedButton
            label="Continue"
            primary={true}
            stye={styles.button}
            onClick={this.continue}
          />
          <br/>
          <RaisedButton
            label="Back"
            primary={false}
            stye={styles.button}
            onClick={this.back}
          />
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
export default FormPersonalDetails;
