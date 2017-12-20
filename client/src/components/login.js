import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import _, {debounce} from 'lodash';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

//required props are user, userList, setUser
export default class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        id: 1,
        username: 'noone'
      },
      dialogVisibility: false
    }
    this.setUser = this
      .setUser
      .bind(this)
  }
  componentDidMount() {
    if (_.isEmpty(this.props.user)) {
      this.setState({dialogVisibility: true})
    }
  }
  setUser(e, key, value) {
    this.setState({
      user: this
        .props
        .userList
        .find(i => {
          return i.id == value
        })
    })
  }
  render() {
    const actions = [< FlatButton label = "Login" onClick = {
        () => {
          this.setState({dialogVisibility: false}),
          this
            .props
            .setUser(this.state.user)
        }
      } />]
    let menuItem = this
      .props
      .userList
      .map(i => {
        return (<MenuItem key ={i.id} value={i.id} primaryText={i.username}/>)
      })
    return (

      <div>
        Welcome {this.state.user.username}
        <Dialog
          title={"Login"}
          actions={actions}
          modal={true}
          open={this.state.dialogVisibility}>

          <br/>
          <DropDownMenu value ={this.state.user.id} onChange={this.setUser}>
            {menuItem}
          </DropDownMenu>

        </Dialog>
      </div>
    )
  }
}