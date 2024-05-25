import { Avatar, Box, Heading, Text } from "grommet";
import { useState } from "react";

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
				<Avatar
					margin={"xsmall"}
					src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
				/>
				<Text weight={"bold"}>Bhanu Subramaniam</Text>
				<Text>+91 12345 67890</Text>
				<Text>pearlacademy@gmail.com</Text>
			</Box>
		</>
	);
};

export default ContactUs;
