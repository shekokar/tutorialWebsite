import { Anchor, Box, Footer, Grid, Page, PageHeader, Text } from "grommet";
import NavBar from "../NavBar";
import ImgCarousel from "./ImgCarousel";
import ContactUs from "./ContactUs";
import Main from "./Main";
import GetInTouch from "./GetInTouch";

const Home = () => {
	return (
		<Page kind={"full"}>
			<NavBar>
				<Text weight={"bold"} size="large">
					Bhanu Tutorials
				</Text>
			</NavBar>
			<Grid
				// fill="horizontal"
				// height={"100vh"}
				// gap={"xxsmall"}
				rows={["45vh", "auto"]}
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
					height={"auto"}
					// background={"dark-2"}
					gridArea="getInTouch"
				>
					<GetInTouch />
				</Box>
			</Grid>

			{/* <PageContent>
				<Box
					height={"medium"}
					width={"xlarge"}
					style={{ margin: "auto", paddingTop: "1%" }}
				>
					<Carousel play={3000}>
						<Image
							fit="cover"
							src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
						/>
						<Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
						<Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
					</Carousel>
				</Box>



			</PageContent> */}
		</Page>
	);
};

export default Home;
