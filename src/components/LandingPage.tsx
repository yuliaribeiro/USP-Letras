import { Grid } from "@mui/material";
import { AboutUsSection } from "./AboutUs/AboutUsSection";
import { ArticlesSection } from "./Articles/ArticlesSection";
import { FooterSection } from "./Footer/FooterSection";
import { NavBarSection } from "./NavBar/NavBarSection";

export function LandingPage() {
	return (
		<>
			<Grid className="dimentionToScreen">
				<NavBarSection />
				<h1 className="landingPageTitle">
					Falantes de <span className=" text-red-500">Russo</span> no <span className="text-blue-400">BR</span>
				</h1>
			</Grid>
			<AboutUsSection />
			<Grid className="w-screen h-auto">
				<ArticlesSection />
			</Grid>
			<Grid>
				<FooterSection />
			</Grid>
		</>
	);
}
