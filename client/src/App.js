import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar'
import Sidebar from './containers/sidebar'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  
  render() {
    injectTapEventPlugin()
    return (
      <MuiThemeProvider>
      <div className="App">
        <Sidebar/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
