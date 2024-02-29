import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthenticationInitializer from "./components/AuthenticationInitializer";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
	return (
		<>
			<Header />
			<ToastContainer />
			<AuthenticationInitializer>
				<main className="py-3">
					<Container>
						<Outlet />
					</Container>
				</main>
			</AuthenticationInitializer>
			<Footer />
		</>
	);
};

export default App;
