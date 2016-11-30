import React from 'react';
import ReactDOM from 'react-dom';

import { Tweet } from 'react-twitter-widgets'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


class DrawerSimpleExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    console.log(this)
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

const App = () => (
  <MuiThemeProvider>
    <div>
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
      <Paper>
        <Tweet tweetId="803540523097026560"/>
        <RaisedButton label="Default"></RaisedButton>
        <DrawerSimpleExample />
      </Paper>
    </div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App/>,
  document.body
);

var s = <Tweet tweetId="803540523097026560"/>
