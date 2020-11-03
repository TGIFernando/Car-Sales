import React from 'react';
import {connect} from 'react-redux'
import {deleteItem} from '../actions'
const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>{props.deleteItem(props.feature[0].id, props.feature[0].price)}} className="button">X</button>
      {props.feature[0] && props.feature[0].name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return{
    carInfo: state
  }
}

export default connect(mapStateToProps, {deleteItem})(AddedFeature);
