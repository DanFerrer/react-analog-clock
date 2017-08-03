import React from 'react';

import ClockFace from './ClockFace';
import ClockHand from './ClockHand';

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
				<ClockHand 
					handId={'hour'}
					handClass={'hour-arm'}
					start={circleStart}
					stop={circleStart - 2}
					draw={circleStart / 2}
					radius={circleStart * 0.85}
				>
				</ClockHand>
				<ClockHand 
					handId={'minute'}
					handClass={'minute-arm'}
					start={circleStart}
					stop={circleStart - 2}
					draw={circleStart * 0.25}
					radius={circleStart * 0.85}
				>
				</ClockHand>
				<ClockHand 
					handId={'second'}
					handClass={'second-arm'}
					start={circleStart}
					stop={circleStart + 50}
					draw={circleStart * 0.20}
					radius={circleStart * 0.85}
				>
				</ClockHand>
			</svg>
		);
	}
}

export default Clock;
