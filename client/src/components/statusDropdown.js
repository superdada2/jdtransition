import React, {Component} from 'react'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

// required props are statusEnum, onChange, defaultStatus
export default class StatusDropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      statusEnum: []
    }
    this.onChange = this
      .onChange
      .bind(this)
  }
  onChange(e, key, value) {
    this
      .props
      .onChange(value)
  }
  componentWillReceiveProps(newProp) {
    if (this.props.statusEnum.length !== newProp.statusEnum.length) {
      this.setState({statusEnum: newProp.statusEnum})
    }
    if (newProp.defaultStatus !== this.state.defaultStatus) {
      this.setState({defaultStatus: newProp.defaultStatus})
    }
  }

  render() {
    let menuItem = this
      .props
      .statusEnum
      .map(i => {
        return (<MenuItem key ={i.id} value={i.id} primaryText={i.data}/>)
      })
    return (
      <DropDownMenu
        value={this.props.defaultStatus}
        onClick={(e) => e.stopPropagation()}
        onChange={this.onChange}>
        {menuItem}
      </DropDownMenu>
    )
  }
}