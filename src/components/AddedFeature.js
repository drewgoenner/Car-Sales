import React from 'react';

const AddedFeature = props => {

  const removeFunction = () => {
    props.removeFeature(props.feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {removeFunction} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
