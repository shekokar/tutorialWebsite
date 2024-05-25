import { Card, CardBody, CardFooter, CardHeader } from "grommet";

const Testimonial = () => {
	return (
		<Card background="light-1">
			<CardHeader pad="small">
				<b>Student First</b>
			</CardHeader>
			<CardBody pad="small">
				Very Good and Helpful for doubt solving and clearing concepts
			</CardBody>
			<CardFooter pad={"small"} background="light-2">
				<i>ICSE 2023-24</i>
			</CardFooter>
		</Card>
	);
};

export default Testimonial;
