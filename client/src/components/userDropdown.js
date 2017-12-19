import React, {Component} from 'react'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// required props are users, onChange, defaultUser
export default class UserDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      defaultUser: 1
    }
    this.onChange = this
      .onChange
      .bind(this)
  }
  onChange(e, key, value) {
    this.setState({defaultUser: value})
    this
      .props
      .onChange(value)
  }
  componentWillReceiveProps(newProp) {
    if (this.props.users.length !== newProp.users.length) {
      this.setState({users: newProp.users})
    }
    if (newProp.defaultUser !== this.state.defaultUser) {
      this.setState({defaultUser: newProp.defaultUser})
    }
  }

  render() {
    let menuItem = this
      .props
      .users
      .map(i => {
        return (<MenuItem key ={i.id} value={i.id} primaryText={i.username}/>)
      })
    return (
      <DropDownMenu
        value={this.props.defaultUser}
        onClick={(e) => e.stopPropagation()}
        onChange={this.onChange}>
        {menuItem}
      </DropDownMenu>
    )
  }
}