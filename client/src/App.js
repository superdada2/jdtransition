import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './containers/sidebar'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './containers/appBar'

class App extends Component {

  render() {
    injectTapEventPlugin()
    return (
      <MuiThemeProvider>
        <div className="App">
          <SideBar/>
          <AppBar/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
