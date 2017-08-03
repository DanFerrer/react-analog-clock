import React from 'react';
import PropTypes from 'prop-types';

const ClockFace = ({coordinates}) => {
	return (
			<g id="clock-face">
				<path className={'hour-marks'} d={`M${coordinates} 94V61M506 ${coordinates}h32M300.5 506v33M94 ${coordinates}H60M411.3 107.8l7.9-13.8M493 190.2l13-7.4M492.1 411.4l16.5 9.5M411 492.3l8.9 15.3M189 492.3l-9.2 15.9M107.7 411L93 419.5M107.5 189.3l-17.1-9.9M188.1 108.2l-9-15.6`}/>
				<circle className={'middle-face'} cx={coordinates} cy={coordinates} r={coordinates * 0.05}/>
			</g>
	);
};

ClockFace.propTypes = {
	coordinates: PropTypes.number
};

export default ClockFace;
