import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

//required props are this.props.fetchComments this.props.comments
export default class CommentContainer extends Component {
  constructor(props) {
    super(props)
    this.renderSubComments = this
      .renderSubComments
      .bind(this)

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
        <Card>
          <CardHeader subtitle={j.user.username + " at " + j.timeStamp}/>
          <CardText>
            {j.comment}
          </CardText>

        </Card>
      )
    })
    return (
      <Card>
        <CardHeader
          title={comment.title}
          subtitle={comment.user.username + " at " + comment.timeStamp}/>
        <CardActions>
          <FlatButton label="Reply"/>
        </CardActions>
        <CardText>
          {comment.comment}
          <br/> {childComments}
        </CardText>
      </Card>
    )

  }

  render() {
    let comments = null
    if (this.props.comments != []) {
      comments = this
        .props
        .comments
        .map(i => {
          return (this.renderSubComments(i))
        })
    }
    return (
      <div>
        <FlatButton labe="New Comment"/> {comments}
      </div>
    )
  }
}
