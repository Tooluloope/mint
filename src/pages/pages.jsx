import React from "react";
import { Switch, Route } from "react-router-dom";
import { DashBoard } from "../components/dashboard";
import { Overview } from "./overview";

export const Pages = () => {
	return (
		<DashBoard>
			<Switch>
				<Route path="/">
					<Overview />
				</Route>
			</Switch>
		</DashBoard>
	);
};
