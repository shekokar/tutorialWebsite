import { Carousel, Image } from "grommet";
import carrousel1 from "../assets/carrousel1.jpg";
import carrousel2 from "../assets/carrousel2.jpg";
import carrousel3 from "../assets/carrousel3.jpg";

const ImgCarousel = () => {
	return (
		<Carousel play={5000} style={{ backgroundColor: "#142a60" }}>
			<Image fit="contain" src={carrousel1} />
			<Image fit="cover" src={carrousel2} />
			<Image fit="cover" src={carrousel3} />
		</Carousel>
	);
};

export default ImgCarousel;
