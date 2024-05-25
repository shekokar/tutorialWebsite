import { Box, Button, Carousel, Grid, Heading, Paragraph, Text } from "grommet";
import data from "../data/course.json";
import testimonialData from "../data/testimonials.json";
import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";

const Main = () => {
	const [classId, setClassId] = useState(8);
	const [details, setDetails] = useState([]);

	useEffect(() => {
		const details = data.filter((obj) => obj.id === classId)[0].details;
		setDetails(details.split("\n"));
	}, [classId]);

	return (
		<>
			<Box
				round="small"
				pad={"medium"}
				background={"light-2"}
				elevation="large"
			>
				<Heading level={2} alignSelf="center">
					About Us
				</Heading>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum
					tempus egestas sed sed risus pretium quam vulputate dignissim. Nibh
					sit amet commodo nulla facilisi nullam vehicula ipsum a. Ac tortor
					dignissim convallis aenean et tortor at. Nullam non nisi est sit amet.
					Feugiat in fermentum posuere urna nec tincidunt. Sit amet nisl purus
					in mollis. Et ultrices neque ornare aenean. Lobortis scelerisque
					fermentum dui faucibus. Donec adipiscing tristique risus nec feugiat
					in fermentum. Vestibulum lectus mauris ultrices eros in cursus turpis
					massa tincidunt. Enim tortor at auctor urna nunc id cursus metus
					aliquam. Donec ultrices tincidunt arcu non sodales neque sodales ut.
					Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu.
					Donec enim diam vulputate ut pharetra sit amet aliquam. Maecenas
					ultricies mi eget mauris pharetra et ultrices. Malesuada fames ac
					turpis egestas. Rutrum tellus pellentesque eu tincidunt tortor aliquam
					nulla.
				</Text>
			</Box>
			<br />
			<Box
				round="small"
				pad={"medium"}
				background={"light-2"}
				elevation="large"
			>
				<Heading level={2} alignSelf="center">
					Course Details
				</Heading>
				<Box justify="center" direction="row" gap={"medium"}>
					<Button
						onClick={(e) => {
							e.preventDefault();
							setClassId(8);
						}}
						primary
						label="Class VIII"
					/>
					<Button
						onClick={(e) => {
							e.preventDefault();
							setClassId(9);
						}}
						primary
						label="Class IX"
					/>
					<Button
						onClick={(e) => {
							e.preventDefault();
							setClassId(10);
						}}
						primary
						label="Class X"
					/>
				</Box>
				{details.map((detail) => (
					<Paragraph fill margin={"small"}>
						{detail}
					</Paragraph>
				))}
				<Paragraph fill margin={"small"}></Paragraph>
			</Box>

			<br />
			<Box
				round="small"
				pad={"medium"}
				background={"light-2"}
				elevation="large"
			>
				<Heading level={2} alignSelf="center">
					Testimonials
				</Heading>
				<Carousel fill controls={false} play={5000}>
					<Grid
						rows={[1]}
						columns={["1/2", "1/2"]}
						areas={[
							{ name: "first", start: [0, 0], end: [0, 0] },
							{ name: "second", start: [1, 0], end: [1, 0] },
						]}
					>
						<Box pad="small" gridArea="first">
							<Testimonial />
						</Box>
						<Box pad="small" gridArea="second">
							<Testimonial />
						</Box>
					</Grid>
					<Grid
						rows={[1]}
						columns={["1/2", "1/2"]}
						areas={[
							{ name: "first", start: [0, 0], end: [0, 0] },
							{ name: "second", start: [1, 0], end: [1, 0] },
						]}
					>
						<Box pad="small" gridArea="first">
							<Testimonial />
						</Box>
						<Box pad="small" gridArea="second">
							<Testimonial />
						</Box>
					</Grid>
				</Carousel>
				<Paragraph fill margin={"small"}></Paragraph>
			</Box>
		</>
	);
};

export default Main;
