import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import _, {debounce} from 'lodash';

//required props are saveTranslation, fieldId, closeDialog
export default class CommentDialog extends Component {
  constructor(props) {
    super(props)

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