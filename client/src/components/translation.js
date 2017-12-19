import React, {Component} from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import CommentComponent from './comments'
// required props, translation, saveComment(saveANDrefresh),
// fetchComments(refreshAllComments),
export default class Translation extends Component {
  constructor(props) {
    super(props)
    this.saveComment = this
      .saveComment
      .bind(this)

  }

  saveComment({
    title = "",
    comment = "",
    replyId = ""
  }) {
    this
      .props
      .saveComment({title: title, translationId: this.props.translation.id, comment: comment, userId: 1, replyId: replyId})
  }
  render() {
    return (
      <div>

        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            < TableHeaderColumn>Value</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>AssignedTo</TableHeaderColumn>
            <TableHeaderColumn>Time Stamp</TableHeaderColumn>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>{this.props.translation.value}</TableRowColumn>
              <TableRowColumn>{this.props.translation.statusEnum.data}</TableRowColumn>
              <TableRowColumn>{this.props.translation.assignedTo}</TableRowColumn>
              <TableRowColumn>{this.props.translation.timestamp}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
        <CommentComponent
          fetchComments={() => console.log("noneed")}
          comments={this.props.translation.translationComments}
          saveComment={this.saveComment}/>
      </div>
    )
  }
}