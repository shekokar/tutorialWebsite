import { Avatar, Box, Heading, Text } from "grommet";
import { useState } from "react";
import photo from "../assets/bhanu_img.jpg";

const ContactUs = () => {
	const [value, setValue] = useState({});
	return (
		<>
			<Box
				background="light-2"
				style={{ marginLeft: "auto", marginRight: "auto" }}
				width={"medium"}
				pad={"medium"}
				round="small"
				elevation="large"
			>
				<Heading level={3}>Contact Us</Heading>
				<Avatar margin={"xsmall"} src={photo} />
				<Text weight={"bold"}>Bhanu Subramaniam</Text>
				<Text>+91 77100 33408 / +91 82910 73164 / +91 73040 06899</Text>
				<Text>pearlacademyclasses@gmail.com</Text>
			</Box>
		</>
	);
};

export default ContactUs;
