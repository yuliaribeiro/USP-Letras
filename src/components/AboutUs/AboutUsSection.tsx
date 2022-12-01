import { useRef } from "react";
import { Grid, IconButton, Paper, Typography } from "@mui/material";
import { Next, Previous } from "../icons/fontAwesomeIcons";
import Slider from "react-slick";
import { Writer } from "./Writer";

// Style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function AboutUsSection() {
	const customSlider = useRef();

	const sliderSettings = {
		arrows: false,
		autoplay: true,
		autoplaySpeed: 6000,
		infinite: true,
		pauseOnHover: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 500,
	};

	return (
		<div id="about-us">
			<Paper className="w-screen" sx={{ bgcolor: "#DADADA" }}>
				<Typography textAlign="justify" sx={{ marginLeft: "auto", marginRight: "auto", paddingY: 10, width: "58%" }}>
					It is a long established fact that a reader will be distracted by the readable content of a page when looking
					at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
					opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
					packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
					will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
					accident, sometimes on purpose (injected humour and the like).
				</Typography>
				<Grid container justifyContent="center" alignItems="center" sx={{ paddingBottom: 10 }}>
					<Grid item>
						{/* @ts-ignore */}
						<IconButton onClick={() => customSlider.current.slickPrev()}>
							<Previous />
						</IconButton>
					</Grid>
					<Grid item lg={6} md={6} sm={4}>
						{/* @ts-ignore */}
						<Slider ref={(slider) => (customSlider.current = slider)} {...sliderSettings}>
							<Writer />
							<Writer />
						</Slider>
					</Grid>
					<Grid item>
						{/* @ts-ignore */}
						<IconButton onClick={() => customSlider.current.slickNext()}>
							<Next />
						</IconButton>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
}
