import {
	Anchor,
	Box,
	Footer,
	Grid,
	Image,
	Page,
	PageHeader,
	Text,
} from "grommet";
import NavBar from "../NavBar";
import ImgCarousel from "./ImgCarousel";
import Main from "./Main";
import GetInTouch from "./GetInTouch";
import logo from "../assets/logo.png";

const Home = () => {
	return (
		<Page kind={"full"}>
			<NavBar>
				<Image src={logo} width={"20%"} />
			</NavBar>
			<Grid
				rows={["45vh", "auto", "auto"]}
				columns={["3/4", "1/4"]}
				areas={[
					{ name: "carousel", start: [0, 0], end: [1, 0] },
					{ name: "main", start: [0, 1], end: [0, 1] },
					{ name: "getInTouch", start: [1, 1], end: [1, 1] },
				]}
			>
				<Box pad={"xsmall"} gridArea="carousel">
					<ImgCarousel />
				</Box>
				<Box pad={"medium"} gridArea="main">
					<Main />
				</Box>
				<Box
					pad={"medium"}
					height={"100%"}
					// background={"dark-2"}
					gridArea="getInTouch"
				>
					<GetInTouch />
				</Box>
			</Grid>
		</Page>
	);
};

export default Home;
