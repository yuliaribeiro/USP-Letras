import { Grid, Paper, Typography } from "@mui/material";
import { Writer } from "./Writer";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function AboutUs() {
	const sliderSettings = {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 6000,
		pauseOnHover: true,
	};

	return (
		<Paper className="w-screen" sx={{ bgcolor: "#DADADA" }}>
			<Typography sx={{ width: "60%", marginLeft: "auto", marginRight: "auto", paddingY: 10 }}>
				It is a long established fact that a reader will be distracted by the readable content of a page when looking at
				its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
				opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
				packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
				will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
				accident, sometimes on purpose (injected humour and the like).
			</Typography>
			<Grid
				container
				sx={{
					width: "60%",
					marginLeft: "auto",
					marginRight: "auto",
					paddingBottom: 10,
				}}
			>
				<Grid item xs>
					<Slider {...sliderSettings}>
						<Writer />
						<div>teste</div>
						<Writer />
					</Slider>
				</Grid>
			</Grid>
		</Paper>
	);
}
