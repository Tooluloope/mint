import React from "react";
import { Link } from "react-router-dom";

export const Pagination = () => {
	return (
		<div class=" px-4 py-3 flex items-center justify-between sm:px-6 mt-5">
			<div class="flex-1 flex justify-between sm:hidden">
				<Link
					to="#"
					class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
				>
					Previous
				</Link>
				<Link
					to="#"
					class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
				>
					Next
				</Link>
			</div>
			<div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
				<div>
					<p class="text-sm leading-5 text-gray-700">
						Showing
						<span class="font-medium px-1">1</span>
						to
						<span class="font-medium px-1">10</span>
						of
						<span class="font-medium px-1">500</span>
						entries
					</p>
				</div>
				<div>
					<nav class="relative z-0 inline-flex shadow-sm">
						<Link
							to="#"
							class="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-transparent text-sm leading-5 font-medium text-black hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
							aria-label="Previous"
						>
							Previous
						</Link>
						<Link
							to="#"
							class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-1000 text-sm leading-5 font-medium text-white hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
						>
							1
						</Link>
						<Link
							to="#"
							class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-transparent text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
						>
							2
						</Link>
						<Link
							to="#"
							class="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-transparent text-sm leading-5 font-medium text-black hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
							aria-label="Next"
						>
							- Next
						</Link>
					</nav>
				</div>
			</div>
		</div>
	);
};
