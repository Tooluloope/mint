import React from "react";

export const Chart = () => {
	return (
		<div className="bg-white xl:w-2/3 w-full overflow-scroll">
			<div className="p-4 sm:flex justify-between items-center">
				<h1 className="text-lg font-bold " style={{ color: "#4F4F4F" }}>
					Today: 5, Aug 2018
				</h1>

				<div className="flex justify-between items-center mt-3 sm:mt-0">
					<div className="inline-block relative bg-transparent select-wrapper mr-10">
						<select
							type="text"
							name="cardType"
							className="  border bg-main-border py-2 bg-white text-black placeholder-gray-600 rounded-md focus:outline-none pl-4 pr-16"
						>
							<option value="visa">1 Jan - 1 Jun </option>
							<option value="masterCard">Master Card</option>
						</select>
					</div>
					<div className="flex justify-between">
						<button className="chart-button mx-2">
							<i class="fas fa-angle-left"></i>
						</button>

						<button className="chart-button mx-2">
							<i class="fas fa-angle-right"></i>
						</button>
					</div>
				</div>
			</div>

			<div></div>
		</div>
	);
};
