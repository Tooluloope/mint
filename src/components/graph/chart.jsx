import React from "react";
import chart from "../../assets/big-graph.5a036165.png";
export const Chart = () => {
	return (
		<div className="bg-white xl:w-2/3 w-full relative ">
			<div className="p-4 sm:flex justify-between items-center">
				<h1 className="text-lg font-bold " style={{ color: "#4F4F4F" }}>
					Today: 5, Aug 2018
				</h1>

				<div className="flex justify-between items-center mt-3 sm:mt-0">
					<div className="inline-block relative bg-transparent select-wrapper mr-10 chart-select">
						<select
							style={{ paddingTop: "0.35rem", paddingBottom: "0.35rem" }}
							type="text"
							name="cardType"
							className="  border bg-main-border py-1 bg-white rounded-md focus:outline-none pl-4 pr-16 text-xs"
						>
							<option value="visa">1 Jan - 1 Jun </option>
							<option value="masterCard">Master Card</option>
						</select>
					</div>
					<div className="flex justify-between text-chart">
						<button className="chart-button mx-2">
							<i className="fas fa-angle-left"></i>
						</button>

						<button className="chart-button mx-2">
							<i className="fas fa-angle-right"></i>
						</button>
					</div>
				</div>
			</div>
			<ul className="flex justify-between sm:mx-12 mx-2 xs:mx-6  font-bold text-sm">
				<li>Jan</li>
				<li>Feb</li>
				<li>Mar</li>
				<li>Apr</li>
				<li>May</li>
				<li>Jun</li>
			</ul>

			<img src={chart} alt="chart" className="xl:absolute  bottom-0 right-0" />
		</div>
	);
};
