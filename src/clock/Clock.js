import React from 'react';

import ClockFace from './ClockFace.js';

import './clock.scss';

const circleStart = 600;

class Clock extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<svg id="clock" width={circleStart} height={circleStart} viewBox={`0 0 ${circleStart} ${circleStart}`}>
				<ClockFace coordinates={circleStart / 2}></ClockFace>
			</svg>
		);
	}
}

export default Clock;
