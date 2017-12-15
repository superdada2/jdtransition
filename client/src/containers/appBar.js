import AppBar from 'material-ui/AppBar'
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleSidebar} from '../actions/uiActions'
import {fetchTableNames} from '../actions/tableActions'

class AppBarUI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }

  render() {
    return (<AppBar
      title="Data Warhouse"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonClick={this.props.toggleSidebar}/>)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleSidebar: toggleSidebar,
    fetchTableNames: fetchTableNames
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(AppBarUI);