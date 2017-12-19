import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import _, {debounce} from 'lodash';

//required props are addTranslation,
export default class AddTranslationDialogComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      translation: "",
      dialogVisibility: false
    }
    this.setTranslation = this
      .setTranslation
      .bind(this)
  }
  setTranslation(e, value) {
    this.setState({translation: value})
  }
  render() {
    const actions = [ < FlatButton label = "Cancel" onClick = {
        this.props.closeDialog
      } />, < FlatButton label = "Save" onClick = {
        () => {
          this
            .props
            .addTranslation(this.state.translation),
          this.setState({dialogVisibility: false})

        }
      } />
    ]

    return (
      <div>
        <RaisedButton
          primary={true}
          onClick={() => this.setState({dialogVisibility: true})}
          label="Add Translation"/>
        <Dialog
          title={"New Translation"}
          actions={actions}
          open={this.state.dialogVisibility}>

          <br/>
          <TextField
            floatingLabelText="Translation"
            onChange={this.setTranslation}
            multiLine={true}
            rows={5}/>

        </Dialog>
      </div>
    )
  }
}