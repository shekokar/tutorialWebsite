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
	const [aboutUs, setAboutUs] = useState([
		"Qualified and experienced faculty from one of the finest schools in Thane.",
		"All subjects under one roof.",
		"Small batch size for personalized coaching.",
		"Regular tests, advanced notes and individual attention will be prioritized.",
	]);
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
					{/* {aboutUs.map((text) => (
						<Text>{text}</Text>
					))} */}
					<Text>
						Our institution boasts a qualified and experienced faculty from one
						of the finest schools in Thane, ensuring top-notch education. We
						offer all subjects under one roof, providing a comprehensive
						learning experience. With small batch sizes, we prioritize
						personalized coaching to cater to individual student needs.
						Additionally, regular tests, advanced notes, and individual
						attention are key components of our teaching methodology.
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
