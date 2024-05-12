import { Carousel, Image } from "grommet";

const ImgCarousel = () => {
	return (
		<Carousel play={5000}>
			<Image fit="cover" src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" />
			<Image fit="cover" src="//v2.grommet.io/assets/IMG_4245.jpg" />
			<Image fit="cover" src="//v2.grommet.io/assets/IMG_4210.jpg" />
		</Carousel>
	);
};

export default ImgCarousel;
