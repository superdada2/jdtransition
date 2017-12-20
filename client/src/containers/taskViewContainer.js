import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTableNames, changeAssigned} from '../actions/tableActions'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import {nav} from '../actions/navigate'
import UserDropdown from '../components/userDropdown'
import {fetchFieldByUser} from '../actions/fieldActions'
import _ from 'lodash'

class TaskViewContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
    this.onCellClick = this
      .onCellClick
      .bind(this)
    this.onFieldCellClick = this
      .onFieldCellClick
      .bind(this)
  }
  componentDidMount() {
    this
      .props
      .fetchFieldByUser(this.props.ui.user.id)
    this
      .props
      .fetchTables()
  }
  componentWillReceiveProps(newProp) {
    if (this.props.ui.user.id != newProp.ui.user.id) {
      this
        .props
        .fetchFieldByUser(newProp.ui.user.id)
    }
  }
  onCellClick(row, column) {
    nav('/table/' + this.props.tables[row].id)
  }
  onFieldCellClick(row, column) {
    nav('/field/' + this.props.field.userField[row].id)
  }

  render() {

    let tableBody = null
    if (this.props.field.userField.length > 0) {

      tableBody = this
        .props
        .field
        .userField
        .map(i => {
          return (
            <TableRow key={i.id}>

              <TableRowColumn>{i.name}</TableRowColumn>
              <TableRowColumn>{i.jdeStatusEnum.data}</TableRowColumn>
              <TableRowColumn>{i.user.username}</TableRowColumn>
              <TableRowColumn>{i
                  .translations
                  .find(j => {
                    return j.dbType == 1
                  }) != undefined
                  ? _.findLast(i.translations, (j) => {
                    return j.dbType == 1
                  }).value
                  : null
}</TableRowColumn>
            </TableRow>
          )
        })
    }
    let summaryTable = null
    if (this.props.tableStatus) {
      summaryTable = this
        .props
        .tables
        .filter(j => j.assignedTo == this.props.ui.user.id)
        .map(i => {
          return (
            <TableRow key={i.id}>
              <TableRowColumn>{i.id}</TableRowColumn>
              <TableRowColumn>{i.name}</TableRowColumn>
              <TableRowColumn>{i.statusEnum.data}</TableRowColumn>
              <TableRowColumn>{i.user.username}</TableRowColumn>

            </TableRow>
          )
        })
    }
    return (
      <div>
        <h3>{this.props.ui.user.username}</h3>
        <h4>Tables</h4>
        <Table onCellClick={this.onCellClick}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>

            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Status</TableHeaderColumn>
              <TableHeaderColumn>AssignedTo</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {summaryTable}
          </TableBody>
        </Table>

        <br/>
        <h4>Fields</h4>
        <Table onCellClick={this.onFieldCellClick}>
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
      </div>
    )
  }
}

function mapStateToProsp(state) {
  return {ui: state.ui, tables: state.table.tableNames, field: state.field, tableStatus: state.table.tableNameState, userField: state.field.userField};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTables: fetchTableNames,
    changeAssigned: changeAssigned,
    fetchFieldByUser: fetchFieldByUser
  }, dispatch);
}

export default connect(mapStateToProsp, mapDispatchToProps)(TaskViewContainer);