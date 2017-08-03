import React from 'react';

import ClockFace from './ClockFace';
// import ClockHand from './ClockHand';

import './clock.scss';

const circleWidth = 600;
const circleStart = circleWidth / 2;

class Clock extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<svg id="clock" width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
				<ClockFace start={circleStart} radius={circleStart * 0.05}></ClockFace>
			</svg>
		);
	}
}

export default Clock;
