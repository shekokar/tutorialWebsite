import {
	Box,
	Button,
	Carousel,
	Grid,
	Heading,
	Image,
	Paragraph,
	Text,
} from "grommet";
import testimonialData from "../data/testimonials.json";
import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import result1 from "../assets/result1.jpg";
import result2 from "../assets/result2.jpg";

const Main = () => {
	const [classId, setClassId] = useState(1);
	const [leftTestimonials, setLeftTestimonials] = useState([]);
	const [rightTestimonials, setRightTestimonials] = useState([]);
	const subjects = [
		["Mathematics", "Biology", "Physics", "Chemistry", "English", "Marathi"],
		[
			"Hindi",
			"History",
			"Geography",
			"CA/CS",
			"Economics",
			"EVS",
			"Artificial Intelligence",
		],
	];

	useEffect(() => {
		const leftTestimonial = testimonialData.filter(
			(testimonial) => testimonial.id % 2 == 0
		);
		const rightTestimonial = testimonialData.filter(
			(testimonial) => testimonial.id % 2 != 0
		);
		setLeftTestimonials(leftTestimonial);
		setRightTestimonials(rightTestimonial);
	}, []);

	return (
		<>
			<Grid
				rows={["auto", "auto", "auto"]}
				columns={["1/2", "1/2"]}
				areas={[
					{ name: "aboutUs", start: [0, 0], end: [1, 0] },
					{ name: "results", start: [0, 1], end: [0, 1] },
					{ name: "subjects", start: [1, 1], end: [1, 1] },
					{ name: "testimonials", start: [0, 2], end: [1, 2] },
				]}
			>
				<Box
					round="small"
					pad={"medium"}
					background={"light-2"}
					elevation="large"
					gridArea="aboutUs"
				>
					<Heading level={2} alignSelf="center">
						About Us
					</Heading>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
						Elementum tempus egestas sed sed risus pretium quam vulputate
						dignissim. Nibh sit amet commodo nulla facilisi nullam vehicula
						ipsum a. Ac tortor dignissim convallis aenean et tortor at. Nullam
						non nisi est sit amet. Feugiat in fermentum posuere urna nec
						tincidunt. Sit amet nisl purus in mollis. Et ultrices neque ornare
						aenean. Lobortis scelerisque fermentum dui faucibus. Donec
						adipiscing tristique risus nec feugiat in fermentum. Vestibulum
						lectus mauris ultrices eros in cursus turpis massa tincidunt. Enim
						tortor at auctor urna nunc id cursus metus aliquam. Donec ultrices
						tincidunt arcu non sodales neque sodales ut. Pretium vulputate
						sapien nec sagittis aliquam malesuada bibendum arcu. Donec enim diam
						vulputate ut pharetra sit amet aliquam. Maecenas ultricies mi eget
						mauris pharetra et ultrices. Malesuada fames ac turpis egestas.
						Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla.
					</Text>
				</Box>
				<br />
				<Box
					round="small"
					pad={"medium"}
					background={"light-2"}
					elevation="large"
					gridArea="results"
					margin={"medium"}
					height={"large"}
				>
					<Heading level={2} alignSelf="center">
						Past Results
					</Heading>
					<Box justify="center" direction="row" gap={"medium"}>
						<Button
							onClick={(e) => {
								e.preventDefault();
								setClassId(1);
							}}
							primary
							label="2022-23"
						/>
						<Button
							onClick={(e) => {
								e.preventDefault();
								setClassId(2);
							}}
							primary
							label="2023-24"
						/>
					</Box>
					<br />
					<ResultCarousel imgId={classId} />
					<Paragraph fill margin={"small"}></Paragraph>
				</Box>

				<Box
					round="small"
					pad={"medium"}
					background={"light-2"}
					elevation="large"
					gridArea="subjects"
					margin={"medium"}
				>
					<Heading level={2} alignSelf="center">
						Subjects Offered
					</Heading>
					<Grid
						rows={["1"]}
						columns={["1/2", "1/2"]}
						areas={[
							{ name: "left", start: [0, 0], end: [0, 0] },
							{ name: "right", start: [1, 0], end: [1, 0] },
						]}
					>
						<Box gridArea="left">
							{subjects[0].map((subject) => (
								<Text
									size="large"
									fill
									margin={"small"}
									weight={"bold"}
									alignSelf="center"
								>
									{`${subject}`}
								</Text>
							))}
						</Box>
						<Box gridArea="right">
							{subjects[1].map((subject) => (
								<Text
									size="large"
									fill
									margin={"small"}
									weight={"bold"}
									alignSelf="center"
								>
									{`${subject}`}
								</Text>
							))}
						</Box>
					</Grid>
				</Box>

				<br />
				<Box
					round="small"
					pad={"medium"}
					background={"light-2"}
					elevation="large"
					gridArea="testimonials"
				>
					<Heading level={2} alignSelf="center">
						Testimonials
					</Heading>
					<Carousel fill controls={false} play={5000}>
						{testimonialData.map((testimonial, idx) => (
							<Box key={idx} alignSelf="center" width={"50%"} pad="small">
								<Testimonial data={testimonial} />
							</Box>
						))}
					</Carousel>
					<Paragraph fill margin={"small"}></Paragraph>
				</Box>
			</Grid>
		</>
	);
};

const ResultCarousel = ({ imgId }) => {
	return (
		<>
			<Image si fit="contain" src={imgId === 1 ? result1 : result2} />
		</>
	);
};

export default Main;
