import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTableNames} from '../actions/tableActions'
import Drawer from 'material-ui/Drawer'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }
  render() {
    return (
      <Drawer open={this.state.open}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    )
  }
}

function mapStateToProsp(state) {
  return {table: state.table};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTableNames: fetchTableNames
  }, dispatch);
}

export default connect(mapStateToProsp, mapDispatchToProps)(Sidebar);