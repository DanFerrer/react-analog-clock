import React from 'react';
import PropTypes from 'prop-types';

const ClockHand = (props) => {
	const {
		handId,
		handStyles,
		handClass,
		start,
		stop,
		draw, 
		radius
	} = props;

	return (
		<g id={handId} style={handStyles}>
			<path className={handClass} d={`M${start} ${stop}V${draw}`}/>
			<circle className='hidden' cx={start} cy={start} r={radius}/>
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
