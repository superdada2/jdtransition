export const SampleReducer = (state = {data:"Thisis a fucking sample"}, action) => {
  var newState = {...state}
  switch(action.type){
    case "SAMPLE":
      newState.data= action.payload;
      return newState;
    default:
      return newState;
      
  }
};