import React from 'react';
import { connect } from 'react-redux';
import { removeFeature } from '../actions/carActions'
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.features.length ? (
        <ol type="1">
          {props.features.map(item => (
            <AddedFeature key={item.name} feature={item} removeFeature={props.removeFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mSTP state:', state);
  return {
    features: state.car.features
  }
}

export default connect(
  mapStateToProps,
  {removeFeature}
)(AddedFeatures);
