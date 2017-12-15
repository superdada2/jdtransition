import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class SummaryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }

  render() {
    return (
      <div>Sumamry
      </div>
    )
  }
}

export default connect(null, null)(SummaryContainer);