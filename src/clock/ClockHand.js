import React from 'react';
import PropTypes from 'prop-types';

const ClockHand = (props) => {
	return (
		<g id={props.handId} style={props.handStyles}>
			<path className={props.handClass} d={`M${props.start} ${props.stop}V${props.draw}`}/>
			<circle className='hidden' cx={props.start} cy={props.start} r={props.radius}/>
		</g>
	);
};

ClockHand.propTypes = {
	handId: PropTypes.string,
	handStyles: PropTypes.object,
	handClass: PropTypes.string,
	start: PropTypes.number,
	stop: PropTypes.number,
	draw: PropTypes.number,
	radius: PropTypes.number
};

export default ClockHand;
