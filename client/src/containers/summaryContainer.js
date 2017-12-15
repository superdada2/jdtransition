import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {nav} from '../actions/navigate'

class SummaryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }

  render() {
    return (
      <div onClick={() => nav('/table/3')}>Sumamry
      </div>
    )
  }
}

export default connect(null, null)(SummaryContainer);