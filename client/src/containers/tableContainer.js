import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchFields, fetchFieldComments} from '../actions/fieldActions'
import {fetchTableComments, saveComment} from '../actions/tableActions'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

import CommentsComponent from '../components/comments'
import {nav} from '../actions/navigate'

class TableContainer extends Component {
  constructor(props) {
    super(props)
    this.saveComment = this
      .saveComment
      .bind(this)
    this.fetchComments = this
      .fetchComments
      .bind(this)
    this.onCellClick = this
      .onCellClick
      .bind(this)
  }
  componentDidMount() {
    this
      .props
      .fetchFields(this.props.match.params.id)
    this.fetchComments(this.props.match.params.id)

  }

  componentWillReceiveProps(newProp) {
    if (this.props.match.params.id != newProp.match.params.id) {
      this
        .props
        .fetchFields(newProp.match.params.id)
      this.fetchComments(newProp.match.params.id)
    }
  }

  onCellClick(row, column) {
    console.log(row, column)
    nav('/field/' + this.props.field.fields[row].id)
  }

  saveComment({
    title = "",
    comment = "",
    replyId = null
  }) {
    this
      .props
      .saveTableComment({title: title, tableId: this.props.match.params.id, comment: comment, userId: 1, replyId: replyId})
      .then(i => {
        this.fetchComments(this.props.match.params.id)
      })
  }
  fetchComments(tableId) {
    console.log("fetching", this.props.match.params.id)
    this
      .props
      .fetchTableComments(tableId)
  }

  render() {

    let tableName = null
    if (this.props.tables.tableNameState) {

      tableName = this
        .props
        .tables
        .tableNames
        .find(i => {
          return i.id == this.props.field.tableId
        })
      tableName = tableName == undefined
        ? null
        : tableName.name
    }

    let tableBody = null
    if (this.props.field.fieldState) {

      tableBody = this
        .props
        .field
        .fields
        .map(i => {
          return (
            <TableRow key={i.id}>

              <TableRowColumn>{i.name}</TableRowColumn>
              <TableRowColumn>{i.oracleStatusEnum.data}</TableRowColumn>
              <TableRowColumn>{i.assignedTo
                  ? null
                  : null}</TableRowColumn>
              <TableRowColumn>{i
                  .translations
                  .find(j => {
                    return j.dbType == 1
                  }) != undefined
                  ? i
                    .translations
                    .find(j => {
                      return j.dbType == 1
                    })
                    .value
                  : null
}</TableRowColumn>
            </TableRow>
          )
        })
    }

    return (
      <div>
        <h3>{tableName}</h3>
        <Table onCellClick={this.onCellClick}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>

            <TableRow>

              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>AssignedTo</TableHeaderColumn>
              <TableHeaderColumn>Translation</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {tableBody}
          </TableBody>
        </Table>

        <CommentsComponent
          fetchComments={this.fetchComments}
          comments={this.props.tableComments}
          saveComment={this.saveComment}/>
      </div>
    )
  }
}
function mapStateToProsp(state) {
  return {field: state.field, tables: state.table, tableComments: state.table.comments, commentsState: state.table.commentsState};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFields: fetchFields,
    fetchTableComments: fetchTableComments,
    saveTableComment: saveComment
  }, dispatch);
}

export default connect(mapStateToProsp, mapDispatchToProps)(TableContainer);