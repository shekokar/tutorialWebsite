import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Paragraph,
	Text,
} from "grommet";

const Testimonial = ({ data }) => {
	return (
		<Card height={"small"} background="light-1">
			<CardHeader pad="small">
				<b>{data.name}</b>
			</CardHeader>
			<CardBody height={"medium"} pad="small">
				{data.review}
			</CardBody>
			<CardFooter height={"auto"} pad={"small"} background="light-2">
				<i>{data.batch}</i>
			</CardFooter>
		</Card>
	);
};

export default Testimonial;
