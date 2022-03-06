//import react into the bundle
import { func } from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//Creo la funcioooon :D

function SimpleCounter(props) {
	return (
		<div className="container">
			<div className="clock">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="icon icon-tabler icon-tabler-alarm"
					width="100"
					height="100"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="#009988"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<circle cx="12" cy="13" r="7" />
					<polyline points="12 10 12 13 14 13" />
					<line x1="7" y1="4" x2="4.25" y2="6" />
					<line x1="17" y1="4" x2="19.75" y2="6" />
				</svg>
			</div>

			<div className="counter">
				<div className="four">{props.four % 10}</div>
				<div className="three">{props.three % 10}</div>
				<div className="two">{props.two % 10}</div>
				<div className="one">{props.one % 10}</div>
			</div>
		</div>
	);
}
// Defino los proptypes :v

SimpleCounter.propTypes = {
	fourth: propTypes.number,
	third: propTypes.number,
	second: propTypes.number,
	first: propTypes.number,
};

//Definir el inicio del contador en cero
let counter = 0;


setInterval(function () {
	const four = Math.floor(counter / 10000);
	const three = Math.floor(counter / 1000);
	const two = Math.floor(counter / 100);
	const one = Math.floor(counter / 10);
	counter++;
	//render your react application
	ReactDOM.render(
		<SimpleCounter one={one} two={two} three={three} four={fourth} />,
		document.querySelector("#app")
	);
}, 1000);
