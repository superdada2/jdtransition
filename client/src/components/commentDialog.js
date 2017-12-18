import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import _, {debounce} from 'lodash';

//required props are isReply, saveComment, closeDialog, dialogVisibility
export default class CommentDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      comment: ""
    }
    this.setComment = this
      .setComment
      .bind(this)
    this.setTitle = this
      .setTitle
      .bind(this)
  }

  setComment(e, comment) {

    this.setState({comment: comment})

  }
  setTitle(e, title) {
    this.setState({title: title})
  }
  render() {
    const actions = [ < FlatButton label = "Cancel" onClick = {
        this.props.closeDialog
      } />, < FlatButton label = "Save" onClick = {
        () => {
          this
            .props
            .saveComment(this.state.title, this.state.comment),
          this
            .props
            .closeDialog()
        }
      } />
    ]
    let titleInput = null
    if (!this.props.isReply) {
      titleInput = <TextField floatingLabelText="Title" onChange={this.setTitle}/>
    }

    return (
      <Dialog
        title={this.props.isReply
        ? "Reply"
        : "New Comment"}
        actions={actions}
        open={this.props.dialogVisibility}>
        {titleInput}
        <br/>
        <TextField
          floatingLabelText="Comment"
          onChange={this.setComment}
          multiLine={true}
          rows={5}/>

      </Dialog>
    )
  }
}