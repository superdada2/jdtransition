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
    this
      .props
      .onChange(key)
  }
  componentWillReceiveProps(newProp) {
    if (this.props.users.length !== newProp.users.length) {
      this.setState({users: newProp.users})
    }
    if (newProp.defaultUser !== this.props.defaultUser) {
      this.setState({defaultUser: newProp.defaultUser})
    }
  }

  render() {
    let menuItem = this
      .state
      .users
      .map(i => {
        return (<MenuItem key ={i.id} value={i.id} primaryText={i.username}/>)
      })
    return (
      <DropDownMenu value={this.state.defaultUser} onChange={this.onChange}>
        {menuItem}
      </DropDownMenu>
    )
  }
}