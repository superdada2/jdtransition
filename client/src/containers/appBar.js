import AppBar from 'material-ui/AppBar'
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleSidebar} from '../actions/uiActions'
import {getUserList, getStatusEnum} from '../actions/uiActions'

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
    if (this.props.ui.statusEnum.length === 0) {

      this
        .props
        .getStatusEnum()
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
    getUserList: getUserList,
    getStatusEnum: getStatusEnum
  }, dispatch);
}

export default connect(mapStateToProsp, mapDispatchToProps)(AppBarUI);