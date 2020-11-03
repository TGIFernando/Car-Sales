import React from 'react';
import { addItem } from '../actions'
import { connect } from 'react-redux'
const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={()=>props.addItem(props.feature.id, props.feature.price)} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = (state) => {
  return{
    carInfo: state
  }
}

export default connect(mapStateToProps,{ addItem })(AdditionalFeature) ;
