import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTableNames} from '../actions/tableActions'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class Summary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }
  componentDidMount() {
    if (!this.props.tableStatus) 
      this.props.fetchTables()
  }
  render() {
    let summaryTable = null
    if (this.props.tableStatus) {
      summaryTable = this
        .props
        .tables
        .map(i => {
          return (
            <TableRow key={i.id}>
              <TableRowColumn>{i.id}</TableRowColumn>
              <TableRowColumn>{i.name}</TableRowColumn>
              <TableRowColumn>{i.statusEnum.data}</TableRowColumn>
              <TableRowColumn>{i.user
                  ? null
                  : null}</TableRowColumn>

            </TableRow>
          )
        })
    }
    return (
      <div>
        <h3>Summary</h3>
        <Table>
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
      </div>
    )
  }
}

function mapStateToProsp(state) {
  return {tables: state.table.tableNames, tableStatus: state.table.tableNameState};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTables: fetchTableNames
  }, dispatch);
}

export default connect(mapStateToProsp, mapDispatchToProps)(Summary);