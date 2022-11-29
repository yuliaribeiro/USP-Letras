import { Grid } from "@mui/material";
import { AboutUsSection } from "../../components/AboutUs/AboutUsSection";
import { ArticlesSection } from "../../components/Articles/ArticlesSection";
import { FooterSection } from "../../components/Footer/FooterSection";
import { NavBarSection } from "../../components/NavBar/NavBarSection";

export function Home() {
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
