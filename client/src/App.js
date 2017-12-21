import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './containers/sidebar'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from './containers/appBar'
import {Route, R} from 'react-router'
import Summary from './containers/summaryContainer'
import Table from './containers/tableContainer'
import Field from './containers/fieldContainer'
import Task from './containers/taskViewContainer'
import styled from 'styled-components'

const AppWrapper = styled.div `
  margin: 10px
`;
class App extends Component {
  componentDidMount() {
    injectTapEventPlugin()
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">

          <SideBar/>
          <AppBar/>
          <AppWrapper>
            <Route exact path="/" component={Summary}/>
            <Route exact path="/summary" component={Summary}/>
            <Route path="/task" component={Task}/>
            <Route path="/table/:id" component={Table}/>
            <Route path="/field/:id" component={Field}/>
          </AppWrapper>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
