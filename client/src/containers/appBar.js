import AppBar from 'material-ui/AppBar'
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleSidebar} from '../actions/uiActions'
import {getUserList} from '../actions/uiActions'

class AppBarUI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }
  componentDidMount() {

    if (this.props.ui.users.length === 0) {

      this
        .props
        .getUserList()
    }
  }

  render() {
    return (<AppBar
      title="Data Warhouse"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
      onLeftIconButtonClick={this.props.toggleSidebar}/>)
  }
}
function mapStateToProsp(state) {
  return {ui: state.ui};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleSidebar: toggleSidebar,
    getUserList: getUserList
  }, dispatch);
}

export default connect(mapStateToProsp, mapDispatchToProps)(AppBarUI);