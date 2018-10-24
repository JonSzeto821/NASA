import React from 'react';
import '../styles/button.css';

const Button = props => {
	// console.log('orange', props);
  // console.log('propsShort', propsShort.getAPOD);
	return(
		<div>
      <button onClick={props.onClick}>{props.name}</button>
    </div>
		);
}

export default Button;
