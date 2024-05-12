import {
	Box,
	Button,
	Form,
	FormField,
	Heading,
	Select,
	TextInput,
} from "grommet";
import { useState } from "react";
import ContactUs from "./ContactUs";

const GetInTouch = () => {
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
				<Heading level={3}>Get In Touch</Heading>
				<Form
					value={value}
					onChange={(nextValue) => setValue(nextValue)}
					onReset={() => setValue({})}
				>
					<FormField name="name" htmlFor="text-input-id" label="Name">
						<TextInput
							placeholder="Enter Name"
							id="text-input-id"
							name="name"
						/>
					</FormField>
					<FormField name="name" htmlFor="text-input-id" label="Phone No.">
						<TextInput
							placeholder="Enter Phone No."
							id="text-input-id"
							name="name"
						/>
					</FormField>
					<FormField name="name" htmlFor="text-input-id" label="Email address">
						<TextInput
							placeholder="Enter Email address"
							id="text-input-id"
							name="name"
						/>
					</FormField>
					<FormField name="name" htmlFor="text-input-id" label="Class">
						<Select
							multiple={false}
							placeholder="Select Class"
							options={["Class 8", "Class 9", "Class 10"]}
						/>
					</FormField>
					<Box direction="row" gap="medium">
						<Button type="submit" primary label="Submit" />
					</Box>
				</Form>
			</Box>
			<br />
			<Box>
				<ContactUs />
			</Box>
		</>
	);
};

export default GetInTouch;
