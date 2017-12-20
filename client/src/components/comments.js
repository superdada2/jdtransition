import React, {Component} from 'react'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import CommentDialog from './commentDialog'
import moment from 'moment'

// required props are this.props.fetchComments this.props.comments,
// this.props.saveComment
export default class CommentContainer extends Component {
  constructor(props) {
    super(props)
    this.renderSubComments = this
      .renderSubComments
      .bind(this)
    this.state = {
      dialogVisibility: false,
      isReply: false,
      replyId: 0
    }

  }
  componentDidMount() {
    //put id later
    this
      .props
      .fetchComments()
  }
  renderSubComments(comment) {
    const id = comment.id
    var children = this
      .props
      .comments
      .filter(i => {
        return i.replyId == id
      })
    var childComments = children.map(j => {
      return (
        <Card key={j.id}>
          <CardHeader
            subtitle={j.user.username + " at " + moment(j.timestamp).format("YYYY-MM-DD HH:mm:ss")}/>
          <CardText>
            {j.comment}
          </CardText>

        </Card>
      )
    })
    return (
      <Card key={comment.id}>
        <CardHeader
          title={comment.title}
          subtitle={comment.user.username + " at " + moment(comment.timestamp).format("YYYY-MM-DD HH:mm:ss")}/>

        <CardText>
          {comment.comment}
          <br/> {childComments}

        </CardText>
        <CardActions><FlatButton
          label="Reply"
          onClick={() => {
        this.setState({isReply: true, dialogVisibility: true, replyId: id})
      }}/></CardActions>
      </Card>
    )

  }

  render() {
    let comments = null
    if (this.props.comments != []) {
      comments = this
        .props
        .comments
        .filter(k => {
          return k.replyId == null
        })
        .map(i => {
          return (this.renderSubComments(i))
        })
    }
    return (
      <div>
        <RaisedButton
          label="New Comment"
          primary={true}
          onClick={() => {
          this.setState({isReply: false, dialogVisibility: true, replyId: null})
        }}/>
        <CommentDialog
          isReply={this.state.isReply}
          closeDialog={() => this.setState({dialogVisibility: false})}
          dialogVisibility={this.state.dialogVisibility}
          saveComment={(title, comment) => this.props.saveComment({title: title, comment: comment, replyId: this.state.replyId})}/>

        <br/> {comments}
      </div>
    )
  }
}