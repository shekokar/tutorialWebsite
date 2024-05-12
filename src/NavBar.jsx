import { Header } from "grommet";

const NavBar = (props) => {
	return (
		<Header
			background="brand"
			pad={{ left: "medium", right: "small", vertical: "small" }}
			elevation="medium"
			{...props}
		/>
	);
};

export default NavBar;
