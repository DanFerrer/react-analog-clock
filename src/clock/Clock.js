import React from 'react';

import ClockFace from './ClockFace';
import ClockHand from './ClockHand';

import './clock.scss';

const circleWidth = 600;
const circleStart = circleWidth / 2;

class Clock extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			date: new Date()
		};
	}

	componentDidMount() {
		this.intervalId = setInterval(() => this.runClock(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	getHandPlacements() {
			const hours = this.state.date.getHours();
			const minutes = this.state.date.getMinutes();
			const seconds = this.state.date.getSeconds();

			const hourPosition = (hours * 360 / 12) + (minutes * (360 / 60) / 12);
			const minutePosition = (minutes * 360 / 60) + (seconds * (360 / 60) / 60);
			const secondPosition = seconds * 360 /60;

			const origin = `${circleStart}px ${circleStart}px`;

			return {
				hour: {
					transformOrigin: origin,
					transform: `rotate(${hourPosition}deg)`
				},
				minute: {
					transformOrigin: origin,
					transform: `rotate(${minutePosition}deg)`
				},
				second: {
					transformOrigin: origin,
					transform: `rotate(${secondPosition}deg)`
				}
			};
	}

	runClock() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		const clockHandStyles = this.getHandPlacements();

		return (
			<svg id="clock" width={circleWidth} height={circleWidth} viewBox={`0 0 ${circleWidth} ${circleWidth}`}>
				<ClockFace start={circleStart} radius={circleStart * 0.05}></ClockFace>
				<ClockHand
					handId='hour'
					handStyles={clockHandStyles.hour}
					handClass='hour-arm'
					start={circleStart}
					stop={circleStart - 2}
					draw={circleStart / 2}
					radius={circleStart * 0.85}
				>
				</ClockHand>
				<ClockHand 
					handId='minute'
					handStyles={clockHandStyles.minute}
					handClass='minute-arm'
					start={circleStart}
					stop={circleStart - 2}
					draw={circleStart * 0.25}
					radius={circleStart * 0.85}
				>
				</ClockHand>
				<ClockHand
					handId='second'
					handStyles={clockHandStyles.second}
					handClass='second-arm'
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
