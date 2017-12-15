import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchFields} from '../actions/fieldActions'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class TableContainer extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this
      .props
      .fetchFields(this.props.match.params.id)
  }

  componentWillReceiveProps(newProp) {
    if (this.props.match.params.id != newProp.match.params.id) {
      this
        .props
        .fetchFields(newProp.match.params.id)
    }
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
    console.log(this.props.field.fieldStatus)
    if (this.props.field.fieldStatus) {

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

        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>
                {"Table: " + tableName}
              </TableHeaderColumn>
            </TableRow>
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
  return {field: state.field, tables: state.table};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchFields: fetchFields
  }, dispatch);
}

export default connect(mapStateToProsp, mapDispatchToProps)(TableContainer);