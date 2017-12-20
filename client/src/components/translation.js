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
import StatusDropdown from './statusDropdown'
// required props, translation, saveComment(saveANDrefresh), user
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
      .saveComment({title: title, translationId: this.props.translation.id, comment: comment, userId: this.props.user.id, replyId: replyId})
  }
  render() {
    return (
      <div>

        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            < TableHeaderColumn>Value</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
            <TableHeaderColumn>Created By</TableHeaderColumn>
            <TableHeaderColumn>Time Stamp</TableHeaderColumn>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>{this.props.translation.value}</TableRowColumn>
              <TableRowColumn><StatusDropdown
                defaultStatus={this.props.translation.status}
                onChange={(value) => this.props.changeStatus(this.props.translation.id, value)}
                statusEnum={this
        .props
        .statusEnum
        .filter(i => {
          return i.data == 'proposed' || i.data == 'confirmed' || i.data == 'rejected'
        })}/></TableRowColumn>
              <TableRowColumn>{this.props.translation.user
                  ? this.props.translation.user.username
                  : 'unassigned'}</TableRowColumn>
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