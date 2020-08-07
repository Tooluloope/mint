import React from "react";
import { DashBoard } from "./components/dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/">
					<DashBoard />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
