import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sampleAction} from './Actions/sampleAction';

class App extends Component {
  render() {  	 

    return (    	
        <div>
           <div>
             {this.props.sample.data}
           </div>
           <div onClick={this.props.sampleAction}>
             click here
           </div>
        </div>
        
    );
  }
}

function mapStateToProsp(state){
  return{
    sample:state.sample
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    sampleAction:sampleAction
  },dispatch);
}

export default connect(mapStateToProsp, mapDispatchToProps)(App);