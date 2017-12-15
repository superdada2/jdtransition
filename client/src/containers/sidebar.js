import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTableNames} from '../actions/tableActions'
import Drawer from 'material-ui/Drawer'
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {toggleSidebar} from '../actions/uiActions'
import {nav} from '../actions/navigate'

class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }
  componentDidMount() {
    if (!this.props.tableNameStatus) 
      this.props.fetchTableNames()
  }
  render() {
    let menuItems = null
    console.log(this.props.sideBarVisibility)
    if (this.props.tableNameStatus) {

      menuItems = this
        .props
        .tableNames
        .map(i => {
          return (
            <MenuItem
              key={i.id}
              onTouchTap={() => {
              nav('/table/' + i.id),
              this
                .props
                .toggleSideBar()
            }}>
              {i.name}</MenuItem>
          )
        })
      menuItems.push(
        <MenuItem onClick={this.props.toggleSideBar}>Close</MenuItem>
      )

      menuItems.unshift(
        <MenuItem
          onTouchTap={() => {
          nav('/summary'),
          this
            .props
            .toggleSideBar()
        }}>Summary</MenuItem>
      )
    }

    return (
      <Drawer open={this.props.sideBarVisibility}>
        {menuItems}
      </Drawer>
    )
  }
}

function mapStateToProsp(state) {
  return {sideBarVisibility: state.ui.sideBarVisibility, tableNames: state.table.tableNames, tableNameStatus: state.table.tableNameState};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTableNames: fetchTableNames,
    toggleSideBar: toggleSidebar
  }, dispatch);
}

export default connect(mapStateToProsp, mapDispatchToProps)(Sidebar);