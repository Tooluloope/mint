import React, { useState } from "react";
import { SideBar } from "../nav/sidebar";
import { Header } from "../nav/header";

export const DashBoard = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div class="flex h-screen bg-gray-200">
			<div
				onClick={() => setSidebarOpen(false)}
				className={`${
					sidebarOpen ? "block" : "hidden"
				}   fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden`}
			></div>
			<SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
			<div class="flex-1 flex flex-col overflow-hidden">
				<Header setSidebarOpen={setSidebarOpen} />
				<main
					style={{ background: "#f7f8fa" }}
					class="flex-1 overflow-x-hidden overflow-y-auto"
				>
					<div class="container mx-auto px-6 py-8">{children}</div>
				</main>
			</div>
		</div>
	);
};
