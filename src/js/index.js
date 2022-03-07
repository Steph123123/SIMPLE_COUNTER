//import react into the bundle

import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//Creo la funcioooon :D

function SimpleCounter(props) {
	return (
		<div className="container">
			<div className="counter">
				<div className="four">{props.fourth % 10}</div>
				<div className="three">{props.third % 10}</div>
				<div className="two">{props.second % 10}</div>
				<div className="one">{props.first % 10}</div>
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

//Defino que el contador inicia en cero
let counter = 0;

setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	counter = counter + 1;
	//render your react application
	ReactDOM.render(
		<>
			<SimpleCounter
				first={one}
				second={two}
				third={three}
				fourth={four}
			/>
		</>,
		document.querySelector("#app")
	);
}, 1000);
