import React from 'react';
import Button from '../button';
import '../styles/APODContainer.css';

const APODContainer = props => {
	console.log('pineapples', props.props);
	props = props.props;
	return(
		<React.Fragment>
			<div className="APODContainer">
				<h2>APOD</h2>
				<h3><span>{props.title}</span></h3>
				<p>Date: <span>{props.date1}</span></p>
				<br />
				<img src={props.APODimg} alt="MichaelScott" className="APODimg"></img>
				<p>{props.explanation}</p>
				<Button onClick={props.getAPOD} name='Get APOD' />
				<Button onClick={props.getAPODDate} name='Get Date' />
				<Button onClick={props.getAPODImg} name='Get Image' />
			</div>
		</React.Fragment>
		);
}
{/*How do I render different JSON elements from the same API with different buttons*/}
export default APODContainer;
