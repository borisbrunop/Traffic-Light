import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home(props) {
	const [state, setState] = useState({ clickedLight: null });

	let redSelected = "";
	if (state.clickedLight === "red") redSelected = "selected";
	let yellowSelected = "";
	if (state.clickedLight === "yellow") yellowSelected = "selected";
	let greenSelected = "";
	if (state.clickedLight === "green") greenSelected = "selected";

	console.log(state);
	return (
		<>
			<div className="container trafficTop " />
			<div className="container traffic rounded justify-content-center">
				<div
					className={"red light rounded-circle " + redSelected}
					onClick={() => setState({ clickedLight: "red" })}
				/>
				<div
					className={"yellow light rounded-circle " + yellowSelected}
					onClick={() => setState({ clickedLight: "yellow" })}
				/>
				<div
					className={"green light rounded-circle " + greenSelected}
					onClick={() => setState({ clickedLight: "green" })}
				/>
			</div>
		</>
	);
}
