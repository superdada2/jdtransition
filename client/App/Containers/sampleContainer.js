import React, {Component} from 'react';
import {connect,bindActionCreators} from 'react-redux';
import sampleAction from '../Actions/sampleAction';

class SampleContainer extends Component {
  render() {  	 
    
    return (    	
        <div>
           asdfasdf
        </div>
        
    );
  }
}

function mapStateToProsp(state){
  return{
    sample:state.sample
  };
}

export default connect(mapStateToProsp)(SampleContainer);