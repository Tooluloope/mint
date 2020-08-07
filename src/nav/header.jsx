import React from "react";
import { Link } from "react-router-dom";

export const Header = ({ setSidebarOpen }) => {
	return (
		<header className=" py-4  bg-white h-20 ">
			<div className="container mx-auto flex justify-between items-center px-6">
				<div className="flex items-center">
					<button
						onClick={() => setSidebarOpen(true)}
						className="text-gray-900 focus:outline-none lg:hidden"
					>
						<svg
							className="h-6 w-6"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M4 6H20M4 12H20M4 18H11"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>

					<div className="relative mx-4 lg:mx-0">
						<span className="absolute inset-y-0 left-0 pl-3 flex items-center">
							<svg
								className="h-5 w-5 text-gray-500"
								viewBox="0 0 24 24"
								fill="none"
							>
								<path
									d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</span>

						<input
							className="form-input w-32 sm:w-64 rounded-md pl-12 pr-4 focus:outline-none  focus:border-gray-400 focus:border py-3"
							type="text"
							placeholder="Search..."
						/>
					</div>
				</div>
				<div className="flex items-center justify-evenly text-main-color">
					<div className="md:flex hidden ">
						<Link to="" className="text-sm mr-8">
							Support
						</Link>
						<Link to="" className="text-sm mr-8">
							FAQ
						</Link>
					</div>
					<button className="flex mx-4 text-gray-600 focus:outline-none md:mr-8">
						<svg
							className="h-6 w-6"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>

					<div className="relative group inline-block">
						<div className="flex items-center">
							<div className="text-right mr-3 hidden sm:block">
								<p className="text-xs">Hello</p>
								<p className="text-sm">Oluwaleke Ojo</p>
							</div>
							<button className="relative z-10 block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
								<img
									className="h-full w-full object-cover"
									src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=296&q=80"
									alt="Your avatar"
								/>
							</button>
						</div>

						<div className="hidden group-hover:block absolute right-0 pt-6  py-2 w-48 bg-white rounded-md shadow-xl z-20">
							<Link
								to="#"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
							>
								Profile
							</Link>
							<Link
								to="#"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
							>
								Products
							</Link>
							<Link
								to="#"
								className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
							>
								Logout
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};
