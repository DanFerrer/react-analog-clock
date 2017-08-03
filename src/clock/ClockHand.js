import React from 'react';
import PropTypes from 'prop-types';

const ClockHand = (props) => {
	return (
		<g id={props.handId}>
			<path className={props.handClass} d={`M${props.start} ${props.stop}V${props.draw}`}/>
			<circle className={'hidden'} cx={props.start} cy={props.start} r={props.radius}/>
		</g>
	);
};

ClockHand.propTypes = {
	handId: PropTypes.number,
	handClass: PropTypes.number,
	start: PropTypes.number,
	stop: PropTypes.number,
	draw: PropTypes.number,
	radius: PropTypes.number
};

export default ClockHand;
