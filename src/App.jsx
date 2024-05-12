import { Grommet } from "grommet";
import Home from "./components/Home";

const theme = {
	global: {
		colors: {
			brand: "#ff91a4",
		},
		font: {
			family: "Roboto",
			size: "20px",
			height: "20px",
		},
	},
};

function App() {
	return (
		<Grommet full theme={theme}>
			<Home />
		</Grommet>
	);
}

export default App;
