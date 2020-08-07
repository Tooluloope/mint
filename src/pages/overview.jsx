import React from "react";
import { Chart } from "../components/graph/chart";
import { Table } from "../components/table/table";

export const Overview = () => {
	return (
		<>
			<div class="mt-4">
				<div class="flex flex-wrap -mx-6 px-4">
					<div class="w-full px-2 sm:w-1/2 xl:w-1/4">
						<div class="flex justify-between items-center px-2 py-4 shadow-sm rounded-md bg-white">
							<div class="mx-5">
								<div class=" text-box-color text-sm">
									Daily Transaction Volume
								</div>
								<h4 class=" text-xl text-black">2,342</h4>
							</div>

							<svg
								width="64"
								height="38"
								viewBox="0 0 64 38"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.85714 20.2551L1 11.1939V38H63V1L50.8797 11.1939L42.4887 7.79592L28.0376 14.9694L9.85714 20.2551Z"
									fill="url(#paint0_linear)"
								/>
								<path
									d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1"
									stroke="#0294FF"
								/>
								<defs>
									<linearGradient
										id="paint0_linear"
										x1="5.98077"
										y1="13.257"
										x2="5.98077"
										y2="44.3122"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#0294FF" stop-opacity="0.126274" />
										<stop offset="1" stop-color="white" stop-opacity="0.01" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>

					<div class="w-full mt-6 px-2 sm:w-1/2 xl:w-1/4 sm:mt-0">
						<div class="flex justify-between items-center px-2 py-4 shadow-sm rounded-md bg-white">
							<div class="mx-5">
								<div class=" text-box-color text-sm">
									Daily Transaction Value
								</div>
								<h4 class=" text-xl text-black">₦4,000,000</h4>
							</div>

							<svg
								width="64"
								height="38"
								viewBox="0 0 64 38"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.85714 20.2551L1 11.1939V38H63V1L50.8797 11.1939L42.4887 7.79592L28.0376 14.9694L9.85714 20.2551Z"
									fill="url(#paint0_linear)"
								/>
								<path
									d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1"
									stroke="#0294FF"
								/>
								<defs>
									<linearGradient
										id="paint0_linear"
										x1="5.98077"
										y1="13.257"
										x2="5.98077"
										y2="44.3122"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#0294FF" stop-opacity="0.126274" />
										<stop offset="1" stop-color="white" stop-opacity="0.01" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>

					<div class="w-full mt-6 px-2 sm:w-1/2 xl:w-1/4 xl:mt-0">
						<div class="flex justify-between items-center px-2 py-4 shadow-sm rounded-md bg-white">
							<div class="mx-5">
								<div class=" text-box-color text-sm">
									Total Transaction Volume{" "}
								</div>
								<h4 class=" text-xl text-black">452,000</h4>
							</div>

							<svg
								width="64"
								height="38"
								viewBox="0 0 64 38"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.85714 20.2551L1 11.1939V38H63V1L50.8797 11.1939L42.4887 7.79592L28.0376 14.9694L9.85714 20.2551Z"
									fill="url(#paint0_linear)"
								/>
								<path
									d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1"
									stroke="#0294FF"
								/>
								<defs>
									<linearGradient
										id="paint0_linear"
										x1="5.98077"
										y1="13.257"
										x2="5.98077"
										y2="44.3122"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#0294FF" stop-opacity="0.126274" />
										<stop offset="1" stop-color="white" stop-opacity="0.01" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>

					<div class="w-full mt-6 px-2 sm:w-1/2 xl:w-1/4 xl:mt-0">
						<div class="flex justify-between items-center px-2 py-4 shadow-sm rounded-md bg-white">
							<div class="mx-5">
								<div class=" text-box-color text-sm">
									Total Transaction Value{" "}
								</div>
								<h4 class=" text-xl text-black">₦4,000,000</h4>
							</div>
							<svg
								width="64"
								height="38"
								viewBox="0 0 64 38"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.85714 20.2551L1 11.1939V38H63V1L50.8797 11.1939L42.4887 7.79592L28.0376 14.9694L9.85714 20.2551Z"
									fill="url(#paint0_linear)"
								/>
								<path
									d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1"
									stroke="#0294FF"
								/>
								<defs>
									<linearGradient
										id="paint0_linear"
										x1="5.98077"
										y1="13.257"
										x2="5.98077"
										y2="44.3122"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#0294FF" stop-opacity="0.126274" />
										<stop offset="1" stop-color="white" stop-opacity="0.01" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>
				</div>
			</div>

			<div class="mt-8 xl:flex">
				<Chart />
				<div className="xl:w-1/3 w-full ml-1 md:flex xl:flex-col items-center justify-between mt-3 xl:mt-0">
					<div className="bg-white p-6 mb-1 w-full rounded md:mr-2 xl:mr-0">
						<h2 className="mb-3">Orders</h2>
						<div class=" w-full">
							<div class=" bg-yellow-range-color h-1 w-full rounded-full relative">
								<span
									class=" bg-green-range-color h-1 absolute left-0 top-0 rounded-full"
									style={{ width: "80%" }}
								></span>
							</div>
						</div>
						<div className="text-sm text-sec-color">
							<p className="mt-4 mb-2">
								Pending Orders:{" "}
								<span className="text-yellow-color font-bold">20</span>
							</p>
							<p className="mb-2">
								Reconciled Orders:{" "}
								<span className="text-green-color font-bold">80</span>
							</p>
							<p>
								Total Orders:{" "}
								<span className="text-blue-color font-bold">100</span>
							</p>
						</div>
					</div>

					<div className="bg-white p-6 w-full rounded md:ml-2 xl:ml-0">
						<h2 className="mb-3">Orders</h2>
						<div class=" w-full">
							<div class=" bg-yellow-range-color h-1 w-full rounded-full relative">
								<span
									class=" bg-green-range-color h-1 absolute left-0 top-0 rounded-full"
									style={{ width: "80%" }}
								></span>
							</div>
						</div>
						<div className="text-sm text-sec-color">
							<p className="mt-4 mb-2">
								Pending Orders:{" "}
								<span className="text-yellow-color font-bold">20</span>
							</p>
							<p className="mb-2">
								Reconciled Orders:{" "}
								<span className="text-green-color font-bold">80</span>
							</p>
							<p>
								Total Orders:{" "}
								<span className="text-blue-color font-bold">100</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<Table />
		</>
	);
};
