import React from 'react';
import '../styles/APODContainer.css';
// import { getAPOD } from '../../modules/counter';

const APODContainer = props => {
	console.log('pineapples', props);
	// console.log('watermelon', props.props.title);
	return(
		<div className="APODContainer">
			<h2>APOD Container</h2>
			<p>title: <span>{props.props.title}</span></p>
			<p>date: <span>{props.props.date}</span></p>
			<img src={props.props.imgURL} alt="APOD" className="APODimg"></img>
			<br />
			<button onClick={props.props.getAPOD}>
				Get APOD
			</button>
			{/*<button onClick={props.props.getAPODDate}>
				Get date
			</button>*/}
		</div>
		);
}

export default APODContainer;
