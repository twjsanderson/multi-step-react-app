import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {

  // React.Fragment is like a fake DOM element
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thanks for your submission</h1>
          <p>We'll send you an email momentarily!</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;

