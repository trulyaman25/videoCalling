import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home.jsx';
import Room from './room/roomPage.jsx';

function RouteConfig() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />}/>
				</Routes>
			</Router>
		</>
	)
}

export default RouteConfig;